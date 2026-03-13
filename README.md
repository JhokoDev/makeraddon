# 🛠️ MakerAddon para VS Code

**MakerAddon** é a ferramenta definitiva para desenvolvedores de Addons para Minecraft Bedrock. Esqueça a dor de cabeça de criar pastas manualmente, gerenciar UUIDs repetitivos e configurar manifests do zero.

Com um único comando, o MakerAddon gera toda a estrutura base (Behavior Pack e Resource Pack) pronta para ser reconhecida pelo Minecraft, permitindo que você foque no que importa: criar.

---

## ✨ Recursos Atuais

- 📦 **Geração de Estrutura Base:** Cria instantaneamente as pastas `BP` (Behavior Pack) e `RP` (Resource Pack).
- ⚙️ **Manifests Automáticos:** Gera os arquivos `manifest.json` na versão correta da Mojang (format_version 3).
- 🔑 **UUIDs Dinâmicos:** Injeta automaticamente UUIDs únicos e válidos nos manifests, evitando conflitos de pacotes no jogo.
- 🖼️ **Ícone Padrão:** Copia automaticamente o `pack_icon.png` para os pacotes, garantindo que seu addon não fique com o ícone de erro no Minecraft.
- 🔗 **Preparado para Gráficos Diferidos:** O Resource Pack já vem com a capability `"pbr"` ativada.

---

## 🚀 Como Usar

1. Abra uma pasta (Workspace) vazia no VS Code onde deseja criar seu Addon.
2. Pressione `Ctrl+Shift+P` (ou `Cmd+Shift+P` no Mac) para abrir a Paleta de Comandos.
3. Digite e selecione: **`MakerAddon: Create Addon`**.
4. Digite o nome do seu projeto e pressione `Enter`.
5. Pronto! Sua estrutura será gerada em segundos.

---

## 📋 Requisitos

- É necessário ter uma pasta (Workspace) aberta no VS Code antes de rodar o comando de criação.

---

## 🗺️ Roadmap (O que vem por aí)

O MakerAddon foi construído em uma arquitetura altamente escalável. Nas próximas versões, adicionaremos geradores específicos para:

- [ ] 🧊 **Blocks:** Gerador de blocos customizados (JSON e texturas).
- [ ] 🗡️ **Items:** Gerador de itens (armas, comidas, ferramentas).
- [ ] 🧟 **Entities:** Estrutura base para entidades e modelagem.
- [ ] 📜 **Recipes:** Criador rápido de receitas de craft.
- [ ] 💻 **Scripts:** Setup automático para GameTest/Script API.

---

## 🐛 Encontrou um bug ou tem uma sugestão?

Sinta-se à vontade para abrir uma *Issue* no nosso repositório do GitHub ou enviar um *Pull Request*!