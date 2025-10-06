const {execSync} = require("child_process");

function deriveGithubFromEmail(email) {
    if (!email) {
        return {};
    }

    const m = email.match(/^([^@]+)@users\.noreply\.github\.com$/i);

    if (!m) {
        return {};
    }

    const local = m[1];
    const login = local.includes("+") ? local.split("+").pop() : local;

    if (!login) {
        return {};
    }

    return {login, url: `https://github.com/${login}`};
}

function getContributors() {
    try {
        let fromTag;

        try {
            const tag = execSync("git describe --tags --abbrev=0", {encoding: "utf8"}).trim();
            fromTag = tag || null;
        } catch {
            fromTag = null;
        }

        const range = fromTag ? `${fromTag}..HEAD` : "";
        const cmd = `git shortlog -sne ${range}`.trim();
        const out = execSync(cmd, {encoding: "utf8"}).trim();

        if (!out) {
            return [];
        }

        const lines = out.split("\n").filter(Boolean);

        const map = new Map();

        for (const line of lines) {
            const m = line.match(/^\s*(\d+)\s+(.*?)(?:\s+<([^>]+)>)?\s*$/);

            const count = Number(m?.[1] || 0);

            const displayName = ((m?.[2] || "").trim()) || undefined;
            const displayEmail = ((m?.[3] || "").trim()) || undefined;

            const lcName = (displayName || "").toLowerCase();
            const lcEmail = (displayEmail || "").toLowerCase();

            // Filter bots using lowercase keys only
            if (lcName.includes("bot") || lcEmail.includes("bot")) {
                continue;
            }

            const gh = deriveGithubFromEmail(displayEmail);
            const loginKey = gh.login ? gh.login.toLowerCase() : null;

            const key = loginKey ? `gh:${loginKey}` : (lcEmail ? `em:${lcEmail}` : `nm:${lcName}`);

            const existing = map.get(key);

            if (existing) {
                existing.count += count;
                if (!existing.login && gh.login) {
                    existing.login = gh.login;
                    existing.url = gh.url;
                }
                if (!existing.name && displayName) {
                    existing.name = displayName;
                }
                if (!existing.email && displayEmail) {
                    existing.email = displayEmail;
                }
            } else {
                map.set(key, {count, name: displayName, email: displayEmail, ...gh});
            }
        }

        return Array.from(map.values());
    } catch {
        return [];
    }
}

module.exports = {getContributors};
