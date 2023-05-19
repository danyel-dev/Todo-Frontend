import Item from './Item'


export default function List({nome}) {
    return (
        <div>
            <h1>{nome}</h1>
            
            <ul>
                <Item nome="Fazer a janta"></Item>
                <Item nome="Andar com o cachorro"></Item>
                <Item nome="Estudar"></Item>
            </ul>
        </div>
    );
}
