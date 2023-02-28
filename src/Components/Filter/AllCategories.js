import Filter from "./Filter";

const AllCategories = () => {
    return (
     <div>
        <h1>What do you want?</h1>
        {['DRESSES', 'THROUSERS', 'SKIRTS', 'ALL']
        .map((category, index) =>  <Filter category={category} key={index} />
        )}
     </div>
    )
}

export default AllCategories;