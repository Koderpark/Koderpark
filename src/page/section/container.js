import "../../style/section/container.css";

function Container({children}) {
    return (
      <div className="bg-light lib-grid py-32">
        <div className="lib-grid-l flex flex-column items-center">
            <div className="w-full p-16 bg-heavy rounded-[16px]">
                {children}
            </div>
        </div>
      </div>
    );
}

export default Container;