/**
 * Formata um número como double(4,2), com separador brasileiro.
 */
export function formatarDouble(valor: number | string): string {
    const numero = typeof valor === "string" ? parseFloat(valor) : valor;

    if (numero >= 100) return "Valor inválido"; // 99.99 é o maior válido em double(4,2)
  
    return numero.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
}

/**
 * Formata o DDD para o padrão de 3 digitos.
 */
export function adicionarZerosEsquerda(valor: number | string): string {
  return valor.toString().padStart(3, "0");
}