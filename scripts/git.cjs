const {execSync} = require("child_process");

function deriveGithubFromEmail(email) {
    if (!email) return {};
    const m = email.match(/^([^@]+)@users\.noreply\.github\.com$/i);
    if (!m) return {};
    const local = m[1];
    const login = local.includes("+") ? local.split("+").pop() : local;
    if (!login) return {};
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

        return lines
            .map((line) => {
                const m = line.match(/^\s*(\d+)\s+(.*?)(?:\s+<([^>]+)>)?\s*$/);
                const count = Number(m?.[1] || 0);
                const name = (m?.[2] || "").trim();
                const email = (m?.[3] || "").trim() || undefined;
                const gh = deriveGithubFromEmail(email);

                return {count, name, email, ...gh};
            })
            .filter((p) => {
                const n = (p.name || "").toLowerCase();
                const e = (p.email || "").toLowerCase();

                return !n.includes("bot") && !e.includes("bot");
            });
    } catch {
        return [];
    }
}

module.exports = {getContributors};
