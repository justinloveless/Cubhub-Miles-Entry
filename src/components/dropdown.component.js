
import  {createElement, createComponent} from '../miniFramework';

export const Dropdown = createComponent(({ items, onChange }) =>
    createElement('select', { id: 'dropdown', onChange },
        ...items.map(item =>
            createElement('option', 
                { 
                    value: JSON.stringify(item), 
                    selected: item.name === 'home' 
                }, 
            item.name)
        )
    )
  );