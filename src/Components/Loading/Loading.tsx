interface LoadingInterface {
    pequeno: boolean;
}

const Loading = ({
    pequeno
}: LoadingInterface) => {

    return (
        <div className={`spinner-border ${pequeno ? 'spinner-border-sm' : null}`} role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    );
}

export default Loading;
