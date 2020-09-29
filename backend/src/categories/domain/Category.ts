import { Entity } from '../../common/Entity';
import { UniqueEntityID } from '../../common/UniqueEntityID';

interface ICategoryProps {
  title: string;
}

export class Category extends Entity<ICategoryProps> {

  get title(): string {
    return this.props.title;
  }


  private constructor(props: ICategoryProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(props: ICategoryProps, id?: UniqueEntityID): Category {
    const defaultValues: ICategoryProps = { ...props };

    return new Category(defaultValues, id);
  }
}
