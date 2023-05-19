import Item from './Item'


export default function List({name, items}) {
    return (
        <div>
            <h1>{name}</h1>

            <ul>
                { items.map(item => <Item key={item.id} name={item.name} done={item.done} />) }
            </ul>
        </div>
    );
}
