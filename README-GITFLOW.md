# Fluxo de trabalho de Gitflow

### Resumo

Aqui foi mostrado o Gitflow Workflow:

#### O fluxo geral do Gitflow é:

1 - Uma ramificação de desenvolvimento é criada a partir da branch principal;
2 - Uma ramificação de lançamento é criada a partir da ramificação de desenvolvimento;
3 - Ramificações de recurso são criadas a partir da ramificação de desenvolvimento;
4 - Quando um recurso é concluído, ele é mesclado na ramificação de desenvolvimento;
5 - Quando a ramificação de lançamento é concluída, ela é mesclada nas ramificações de desenvolvimento e principal;
6 - Caso um problema seja detectado na branch principal,uma ramificação de hotfix é criada a partir da principal;
7 - Após a conclusão da ramificação de hotfix, ela é mesclada para as ramificações de desenvolvimento e principal.

## Como funciona

Branch principal e de desenvolvimento:
Em vez da única branch principal, este fluxo de trabalho usa duas ramificações para registrar o histórico do projeto.

## Ramificações de recurso

As ramificações de recurso são em geral criadas a partir da ramificação de desenvolvimento mais recente.

## Criação da ramificação de recurso

Sem as extensões do git-flow:
Mude para o branch develop:

### `git checkout develop`

Crie a sua branch de trabalho:

### `git checkout -b feature_branch`

Padrão de nova feature branch - siglaDoNome/projeto-tarefaXX (XX número tarefa)

As duas siglas do seu nome examplo: Claudeilton Dantas - cd ou CD

Projeto como exemplo - smarteye e tarefas iniciando com 00 caso não tenha alguma de sequência.

Ao criar uma branch seguindo os passos acima: `git checkout -b cd/smarteye-01`

Ao usar a extensão do git-flow:

### Mude para o branch develop: `git checkout develop`

### Crie a sua branch de trabalho: `git flow feature start feature_branch`

Ao criar uma branch seguindo os passos acima:

### `git feature start cd/smarteye-01`

Continue seu trabalho e use o Git como de costume.

### Finalização da ramificação de recurso

Quando você concluir o trabalho de desenvolvimento no recurso, a próxima etapa é mesclar a ramificação de recurso na de desenvolvimento.

Sem as extensões do git-flow:

Volte para a branch de desenvolvimento:

### `git checkout develop`

Depois execute o merge com as suas alterações do branch de trabalho:

### `git merge feature_branch`

Usando as extensões do git-flow:

### `git flow feature finish feature_branch`

### Ramificações de lançamento

Uma nova ramificação de lançamento pode ser criada usando os seguintes métodos.

Sem as extensões do git-flow:

### `git checkout develop`

### `git checkout -b release/0.1.0`

Ao utilizar extensões do git-flow:

### `git flow release start 0.1.0`

Switched to a new branch 'release/0.1.0'

Depois de pronto, o lançamento vai ser mesclado na branch principal e na de desenvolvimento e, então, a ramificação de lançamentovai ser excluída.

Para finalizar a ramificação de lançamento, use os seguintes métodos:

Sem as extensões do git-flow:

### `git checkout prod`

### `git merge release/0.1.0`

Ou, com as extensões do git-flow:

### `git flow release finish '0.1.0'`

### Ramificações de hotfix

As ramificações de manutenção ou de “hotfix” são usadas para corrigir com rapidez lançamentos de produção.
Esta é a única ramificação que deve ser bifurcada com objetividade a partir da branch principal.

Sem as extensões do git-flow:

### `git checkout prod`

### `git checkout -b hotfix_branch`

Ao utilizar extensões do git-flow:

### `git flow hotfix start hotfix_branch`

Assim como na finalização da ramificação de lançamento, a ramificação de hotfix é mesclada tanto na branch principal quanto na de desenvolvimento.

Execute os métodos abaixo:

```
git checkout prod
git merge hotfix_branch
git checkout develop
git merge hotfix_branch
git branch -D hotfix_branch
```

### `git flow hotfix finish hotfix_branch`

### Exemplo

um exemplo completo demonstrando um fluxo de ramificação de recurso a partir do branch develop

```
git checkout develop
git checkout -b cd/smarteye-01
# trabalhar na feature branch que foi criada
git checkout develop
git merge cd/smarteye-01
git checkout prod
git merge develop
git branch -d cd/smarteye-01
```

Além do fluxo das ramificações de recurso e lançamento, um exemplo para a ramificação de hotfixé o seguinte:

```
git checkout prod
git checkout -b cd/smarteye-02
# work is done commits are added to the
cd/smarteye-02
git checkout develop
git merge cd/smarteye-02
git checkout prod
git merge cd/smarteye-02
```

Saiba mais em [gitflow/git worflow](https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow)
