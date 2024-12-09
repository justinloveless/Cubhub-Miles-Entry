
import  {createElement, createComponent} from '../miniFramework';


export const List = createComponent(({ items, onDelete }) =>
    createElement('ul', { id: 'list-items' },
        ...items.map(item =>
            createElement('li', {},
                item.name,
                createElement('button', { onClick: () => onDelete(item) }, 'Delete')
            )
        )
    )
  );