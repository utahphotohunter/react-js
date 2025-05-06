export default function TabButton({ children, onClick, isSelected }) {

    return (
      <>
        <menu>
          <li>
            <button className={isSelected ? "active" : ""} onClick={onClick}>
              {children}
            </button>
          </li>
        </menu>
      </>
    );
}