// This is Specification List's item component

interface ListProps {
    title: string,
    content: string,
}

const SpecificationsList = (props: ListProps) => {

    const {title, content} = props;
    
    return (
        <div className="flex flex-row">
            <div className="w-[50%]">{title}</div>
            <div>{content}</div>
        </div>
    );
}

export default SpecificationsList;