document.getElementById('calculationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const montantDevis = parseFloat(document.getElementById('montantDevis').value) || 0;
    const nombreM2 = parseFloat(document.getElementById('nombreM2').value) || 0;
    const remboursementM2 = parseFloat(document.getElementById('remboursementM2').value) || 0;

    if (nombreM2 <= 0 || remboursementM2 <= 0) {
        alert("Le nombre de m² et le remboursement par m² doivent être supérieurs à zéro.");
        return;
    }

    let primeRemboursee = 0;
    const montantParM2 = montantDevis / nombreM2;

    if (montantParM2 > remboursementM2) {
        const difference = montantParM2 - remboursementM2;
        primeRemboursee = difference * nombreM2;
    } else {
        primeRemboursee = montantDevis * 0.9;
    }

    document.getElementById('primeRemboursee').textContent = primeRemboursee.toFixed(2);
});
