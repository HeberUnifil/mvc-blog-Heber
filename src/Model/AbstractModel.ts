import Database from './Database.js';

/**
 * Classe base para modelos.
 * Cada modelo concreto deve implementar load/save/delete usando Database.prisma.
 * Mantemos a assinatura pedida no enunciado.
 */
export abstract class AbstractModel {
    protected id?: number;

    constructor() {}

    /** Carrega um registro com base em parâmetros (id, slug, etc) e popula a instância. */
    public abstract load(...args: any[]): Promise<AbstractModel | null>;

    /** Insere/atualiza o registro correspondente. Retorna a própria instância. */
    public abstract save(): Promise<AbstractModel>;

    /** Exclui o registro correspondente. Retorna true se sucesso. */
    public abstract delete(): Promise<boolean>;

    public getId(): number | undefined {
        return this.id;
    }
}

export default AbstractModel;
