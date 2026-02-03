/*
 * Copyright (c) PaperMC
 *
 * This file includes code derived from the PaperMC project,
 * licensed under the BSD 2-Clause License.
 */

import { execSync } from "child_process";

export interface CommitterInfo {
    name: string;
    href: string;
    avatar?: string;
}

export interface CommitInfo {
    hash: string;
    committer: CommitterInfo;
}

export const REPO = "Cubic-Project/NitWikit";
const cache = new Map<string, CommitterInfo>();

export const getCommitInfo = async (filePath: string): Promise<CommitInfo | null> => {
    let hash: string, email: string, name: string;
    try {
        [hash, email, name] = execSync(`git log -1 --format="%H,%ae,%an" -- "${filePath}"`)
            .toString()
            .trim()
            .split(",", 3);
    } catch (e) {
        return null;
    }

    const cached = cache.get(email);
    if (cached) {
        return { hash, committer: cached };
    }

    const info: CommitterInfo = { name, href: `mailto:${email}` };

    const res = await fetch(`https://api.github.com/repos/${REPO}/commits/${hash}`);
    if (res.ok) {
        const commit = await res.json();
        info.href = commit.author.html_url;
        info.avatar = commit.author.avatar_url;
    }

    cache.set(email, info);
    return { hash, committer: info };
};
