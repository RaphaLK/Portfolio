/** @type {import('next').NextConfig} */
const nextConfig = {
  // Don't auto-generate AGENTS.md / CLAUDE.md on dev/build.
  agentRules: false,
  async redirects() {
    // Next matches `source` case-insensitively, so we can't redirect
    // /Projects -> /projects (it would loop). The old capitalized routes
    // simply 404; only the removed /Components route needs a redirect.
    return [{ source: "/Components", destination: "/", permanent: true }];
  },
};

export default nextConfig;
