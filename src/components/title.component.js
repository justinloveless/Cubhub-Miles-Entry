
import  {createElement, createComponent} from '../miniFramework';

export const Title = createComponent(({ text, onToggle, isCollapsed }) =>
    createElement('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' } },
        createElement('h3', { style: { margin: '0', flexGrow: '1' } }, text),
        createElement('button', { 
            id: 'toggle-btn', 
            onClick: onToggle,
            style: { cursor: 'pointer', backgroundColor: 'transparent', border: 'none', fontSize: '18px', color: 'white' }
        }, isCollapsed ? '▶' : '▼')
    )
  );