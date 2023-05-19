export default function Item({name, done}) {
    return (
        <li>{name}: {done === true? "concluida": "Não concluida" }</li>
    );
};
