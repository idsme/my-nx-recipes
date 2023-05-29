# Standalone app start to finish.
npx create-nx-workspace@14
npx nx g @nx/angular:library cart
npx nx g @nx/angular:lib shared/ui --buildable
ACME Labs Angular Standalone
NX14>>TESTED>>npx create-nx-workspace@14  --preset angular sandboxNX14 --cli nx --nxCloud true --ci github --style scss --pm npm --skipGit --dry-run
NX15>>OPTION>>npx create-nx-workspace@15  --preset angular-standalone sandboxNX15 --cli --nxCloud true --ci github --style scss --pm npm --skipGit true --dry-run
npx create-nx-workspace@15  --preset angular-monorepo sandboxNX15 --cli --nxCloud true --ci github --allPrompts --style scss --pm npm --skipGit --dry-run
