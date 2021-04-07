# Projeto do Livro Cangaceiro JavaScript - Flávio Almeida
- JavaScript
- HTML
# git config ssh
- Mudar as URLs remotas de HTTPS para SSH
- Abra Terminal.
- Altere o diretório de trabalho atual referente ao seu projeto local.
- Liste seus remotes existentes para obter o nome do remote que deseja alterar.
- $ git remote -v
- > origin  https://github.com/USERNAME/REPOSITORY.git (fetch)
- > origin  https://github.com/USERNAME/REPOSITORY.git (push)
- Altere a URL do remote de HTTPS para SSH com o comando git remote set-url.
- $ git remote set-url origin git@github.com:USERNAME/REPOSITORY.git
- Verifique se o URL remote foi alterado.
- $ git remote -v
- Verify new remote URL
- > origin  git@github.com:USERNAME/REPOSITORY.git (fetch)
- > origin  git@github.com:USERNAME/REPOSITORY.git (push)