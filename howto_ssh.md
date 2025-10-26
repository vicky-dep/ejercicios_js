# Howto ssh for github

1. Create SSH Key

2. Add to github account

3. Configure ssh config

```bash
[user@workstation .ssh]$ cat ~/.ssh/config 
Host github.com	
  AddKeysToAgent yes
  IdentityFile ~/.ssh/ed25519_fp

Host github-fp.com
  HostName github.com
  AddKeysToAgent yes
  IdentityFile ~/.ssh/ed25519_secondary_sshkey
[user@workstation .ssh]$ 
```

4. Change remote origin

```bash
# Check
git remote -v

# Change
git remote set-url origin git@github.com:vicky-dep/ejercicios_js.git

# Check
git remote -v
```

5. Test

```bash
ssh git@github.com
```

6. You win a coffee!
