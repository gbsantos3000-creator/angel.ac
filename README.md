# ANGEL A.C Scanner EXE

Este pacote cria um `angel-scanner.exe` pelo GitHub Actions.

## Como usar no GitHub

1. Copie `angel_scanner.py` para a raiz do seu repositório.
2. Copie `.github/workflows/build-windows-exe.yml` para o seu repositório.
3. Faça commit.
4. Vá em **Actions** > **Build ANGEL A.C Scanner EXE** > **Run workflow**.
5. Baixe o artifact `angel-scanner-exe`.
6. Pegue o `angel-scanner.exe` e envie para:

```txt
public/downloads/angel-scanner.exe
```

## PIN

O scanner aceita PIN via variável de ambiente:

```powershell
$env:ANGEL_PIN="123456"
.\angel-scanner.exe
```

Sem `ANGEL_PIN`, ele roda em modo demo.

## Observação

O scanner é read-only: ele coleta informações defensivas e gera um relatório JSON. Ele não instala driver, não remove arquivos e não faz bypass.
