import CardEtu from "./CardEtu"
import OtherEtu from "./OtherEtu"
import SelfEtu from "./SelfEtu"

const ListConEtu = () => {
    return (
        <>
            <div className=" py-2">
                <h2 className="px-2 text-xl font-semibold">Listes des participants</h2>
                <hr className="sm:my-5 mx-2"/>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4  gap-1 w-full px-2  py-2">
                    <SelfEtu />
                    <CardEtu />
                    <CardEtu />
                    <OtherEtu />
                </div>
            </div>

        </>
    )
}

export default ListConEtu