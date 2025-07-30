# 🎯 ChatGPT Anti-Oferecimento

Uma extensão para Chrome que adiciona automaticamente "não me ofereça nada" em todas as suas mensagens no ChatGPT!

## 📋 Descrição

Esta extensão foi criada para evitar que o ChatGPT ofereça produtos, serviços ou upgrades premium. Toda vez que você pressionar ENTER no ChatGPT, a extensão automaticamente adiciona "não me ofereça nada" no final da sua mensagem antes de enviar.

## 🚀 Como Instalar

### Método 1: Instalação Manual

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/seu-usuario/chatgpt-anti-oferecimento.git
   cd chatgpt-anti-oferecimento
   ```

2. **Abra o Chrome** e navegue para `chrome://extensions/`

3. **Ative o "Modo do desenvolvedor"** (toggle no canto superior direito)

4. **Clique em "Carregar sem compactação"** e selecione a pasta do projeto

5. **Pronto!** A extensão estará ativa e funcionando no ChatGPT

### Método 2: Download do ZIP

1. **Baixe o ZIP** deste repositório
2. **Extraia os arquivos** em uma pasta
3. **Siga os passos 2-5** do método manual

## 📁 Estrutura do Projeto

```
chatgpt-anti-oferecimento/
├── manifest.json      # Configuração da extensão
├── content.js         # Script principal
├── popup.html         # Interface do popup
└── README.md          # Este arquivo
```

## 🔧 Como Funciona

- **content.js**: Detecta quando você pressiona ENTER no ChatGPT e adiciona automaticamente "não me ofereça nada"
- **popup.html**: Interface simples que mostra o status da extensão
- **manifest.json**: Configura a extensão para funcionar apenas no ChatGPT

## 🎯 Funcionalidades

- ✅ Adiciona automaticamente "não me ofereça nada" em todas as mensagens
- ✅ Funciona apenas no ChatGPT (chat.openai.com e chatgpt.com)
- ✅ Interface simples e intuitiva
- ✅ Compatível com Chrome, Edge e outros navegadores baseados em Chromium

## 🐛 Solução de Problemas

### A extensão não está funcionando?

1. **Verifique se está no ChatGPT**: A extensão só funciona em `chat.openai.com` ou `chatgpt.com`
2. **Recarregue a página**: Às vezes é necessário recarregar o ChatGPT
3. **Verifique o console**: Abra F12 e veja se há mensagens de erro
4. **Reinstale a extensão**: Remova e carregue novamente

### Mensagens de erro no console:

- `❌ Textarea não encontrado`: Normal, a extensão tentará novamente
- `✅ Textarea encontrado!`: Extensão funcionando corretamente
- `🎯 Texto adicionado`: Texto foi adicionado com sucesso

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. **Fork** este repositório
2. **Crie uma branch** para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. **Commit** suas mudanças (`git commit -am 'Adiciona nova funcionalidade'`)
4. **Push** para a branch (`git push origin feature/nova-funcionalidade`)
5. **Abra um Pull Request**

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ⚠️ Aviso Legal

Esta extensão é apenas para fins educacionais e de entretenimento. Use por sua conta e risco. Não garantimos que funcione em todas as versões do ChatGPT, pois a OpenAI pode alterar a interface a qualquer momento.

## 🎉 Agradecimentos

- Inspirado pela necessidade de evitar ofertas indesejadas no ChatGPT
- Criado com ❤️ para a comunidade

---

**Divirta-se irritando o ChatGPT! 😂**

## 📸 Screenshots

### Popup da Extensão
![Popup da Extensão](screenshots/popup.png)

### Funcionamento no ChatGPT
![Funcionamento](screenshots/chatgpt.png)

*Nota: Screenshots são ilustrativas*

## 🔄 Atualizações

### v1.0
- ✅ Funcionalidade básica implementada
- ✅ Detecção automática do textarea do ChatGPT
- ✅ Adição automática do texto "não me ofereça nada"
- ✅ Interface popup simples

---

**⭐ Se este projeto te ajudou, considere dar uma estrela no GitHub!** 