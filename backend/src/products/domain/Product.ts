import { Entity } from '../../common/Entity';
import { UniqueEntityID } from '../../common/UniqueEntityID';

interface IProductProps {
  title: string;
  description?: string | null;
  price: number
  categoryId: string
}

export class Product extends Entity<IProductProps> {

  get title(): string {
    return this.props.title;
  }

  get description(): string | null | undefined {
    return this.props.description;
  }

  get price(): number {
    return this.props.price;
  }

  get categoryId(): string | null | undefined {
    return this.props.categoryId;
  }

  private constructor(props: IProductProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(props: IProductProps, id?: UniqueEntityID): Product {
    const defaultValues: IProductProps = { ...props };

    return new Product(defaultValues, id);
  }
}
