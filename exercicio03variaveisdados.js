class Imovel{
    construtor(quartos,tipo,endereco){
        this.quartos = quartos
        this.tipo = tipothis.endereco
    }
    exibirInformacoes(){
        return 'Tipo: ${this.tipo} Quartos: ${this.quartos} Endereco: ${this.endereco}'
    }
}

const casa = new Imovel(4, "Casa", "Rua da Amizade, 789 - Bairro Alegre")
const apartamento = new Imovel(2, "Apartamento", "Avenida da Paz, 123 - Centro")
console.log(casa.exibirInformacoes())
console.log(apartamento.exibirInformacoes())