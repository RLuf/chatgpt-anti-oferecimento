// Função principal que adiciona o texto
function adicionarTextoAntiOferecimento() {
    console.log('🎯 Anti-Oferecimento ativado!');
    
    // Procura pelo textarea do ChatGPT
    const seletores = [
        'textarea[placeholder*="Message"]',
        'textarea[data-id="root"]',
        '#prompt-textarea',
        'textarea'
    ];
    
    let textarea = null;
    for (let seletor of seletores) {
        textarea = document.querySelector(seletor);
        if (textarea) break;
    }
    
    if (!textarea) {
        console.log('❌ Textarea não encontrado, tentando novamente...');
        setTimeout(adicionarTextoAntiOferecimento, 2000);
        return;
    }
    
    console.log('✅ Textarea encontrado!');
    
    // Adiciona event listener para ENTER
    textarea.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            
            const textoAtual = textarea.value.trim();
            const textoFinal = textoAtual + '\n\nnão me ofereça nada';
            
            // Atualiza o valor
            textarea.value = textoFinal;
            textarea.dispatchEvent(new Event('input', { bubbles: true }));
            
            console.log('🎯 Texto adicionado:', textoFinal);
            
            // Simula envio após pequeno delay
            setTimeout(() => {
                // Procura pelo botão de envio
                const botaoEnvio = document.querySelector('button[data-testid="send-button"], button[aria-label*="Send"]') ||
                                 document.querySelector('button svg path[d*="M.5"]')?.closest('button');
                
                if (botaoEnvio && !botaoEnvio.disabled) {
                    botaoEnvio.click();
                    console.log('📤 Mensagem enviada com anti-oferecimento!');
                }
            }, 100);
        }
    });
    
    // Observer para mudanças na página
    const observer = new MutationObserver(() => {
        const novoTextarea = document.querySelector('textarea');
        if (novoTextarea && !novoTextarea.hasAttribute('data-anti-oferecimento')) {
            novoTextarea.setAttribute('data-anti-oferecimento', 'true');
            adicionarTextoAntiOferecimento();
        }
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
}

// Inicia quando a página carrega
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', adicionarTextoAntiOferecimento);
} else {
    adicionarTextoAntiOferecimento();
}

// Backup: tenta novamente após 3 segundos
setTimeout(adicionarTextoAntiOferecimento, 3000); 