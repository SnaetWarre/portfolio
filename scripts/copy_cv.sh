#!/usr/bin/env bash

set -euo pipefail

# The CV holds my phone number. Ship it only with PUBLIC_SHOW_CV=true.
if [[ "${PUBLIC_SHOW_CV:-}" != "true" ]]; then
  echo "Skipped CV files (set PUBLIC_SHOW_CV=true to include them)"
  exit 0
fi

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
dist="$root/dist"

cp "$root/CV_Warre_Snaet.pdf" "$root/CV_Warre_Snaet_ATS.pdf" "$dist/"

echo "Copied public CV files into $dist"
