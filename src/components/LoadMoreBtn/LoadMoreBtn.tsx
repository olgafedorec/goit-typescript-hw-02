import css from './LoadMoreBtn.module.css';

type LoadMoreProps = {
    onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreProps> = ({ onClick }) => {
    return (
        <div>
            <button className={css.btn} onClick={onClick}>
                Load More
            </button>
        </div>
    )
};

export default LoadMoreBtn;