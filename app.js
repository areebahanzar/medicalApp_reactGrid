import React, { useState, useRef} from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import 'ag-grid-enterprise';



//ISSUE HERE: IF I SELECT ONE CHECKBOX, IT CHECKS THE ENTIRE ROW.
const App = () => {

  const gridRef = useRef(null);

  const onButtonClick = e => {
          const selectedNodes = gridRef.current.api.getSelectedNodes()
          const selectedData = selectedNodes.map( node => node.data )
          const selectedDataStringPresentation = selectedData.map( node => `${node.make} ${node.model}`).join(', ')
          alert(`Selected nodes: ${selectedDataStringPresentation}`)
      }
  
  const [rowData] = useState([
    {Protein: "Olive Oil" , Vegetables: "Endive", Fruits: "Pomegranate", Herbs:"Sage"},
    {Protein: "Pumpkin Seeds", Vegetables: "Green Beans", Fruits: "Quinoa", Herbs:"Turmeric"},
    {Protein: "Salmon (Wild Caught)", Vegetables: "Zucchini", Fruits: "Raspberry"},
    {Protein: "Sardines", Vegetables: "Yellow Squash", Fruits: "Starfruit", Herbs:""},
    {Protein: "Sunflower Seeds", Vegetables: "Watercress", Fruits: "Strawberry", Herbs:""},
    {Protein: "Turkey (Dark & Light)", Vegetables: "", Fruits: "Wild Rice", Herbs:""},
    {Protein: "Walnuts", Vegetables: "", Fruits: "", Herbs:""},
    {Protein: "Almond Milk (Unsweetened)", Vegetables: "", Fruits: "", Herbs:""},
    {Protein: "Avocado Oil", Vegetables: "", Fruits: "", Herbs:""},
    {Protein: "Beef (Grassfed, Fat & Lean", Vegetables: "", Fruits: "", Herbs:""},
    {Protein: "Bone Broth", Vegetables: "", Fruits: "", Herbs:""},
    {Protein: "Butter", Vegetables: "", Fruits: "", Herbs:""},
    {Protein: "Fish (Haddock, Halibut, Tilapia)", Vegetables: "", Fruits: "", Herbs:""},
    {Protein: "Chicken", Vegetables: "", Fruits: "", Herbs:""},
    {Protein: "Coconut Milk (Unsweetend)", Vegetables: "", Fruits: "", Herbs:""},

])

// ----------- METHOD THAT DIDNT WORK FOR CELL CHECKBOXES --------
// const columnDefs = [{ headerName: 'Refunded', 
//     field: 'refunded', 
//     editable:true,
//     cellRenderer: params => {
//         return `<input type='checkbox' ${params.value ? 'checked' : ''} />`;
//     }
// }];

  const [columnDefs] = useState([
    
       { field: "Protein", sortable:true, filter:true, checkboxSelection:true,  },
       { field: "Vegetables", sortable:true, filter:true, checkboxSelection:true },
       { field: "Fruits", sortable:true, filter:true, checkboxSelection:true },
       { field: "Herbs", sortable:true, filter:true, checkboxSelection:true }
   ]);     

   //---------JUST IN CASE I NEED TO MODIFY THIS ORIGINAL CODE, I MADE A BACKUP UNEDITTED COPY
    // const [columnDefs] = useState([
  //      { field: "Protein", sortable:true, filter:true, checkboxSelection:true,  },
  //      { field: "Vegetables", sortable:true, filter:true, checkboxSelection:true },
  //      { field: "Fruits", sortable:true, filter:true, checkboxSelection:true },
  //      { field: "Herbs", sortable:true, filter:true, checkboxSelection:true }
  //  ]); 
   

   return (
    <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
      <button onClick={onButtonClick}></button>
        <AgGridReact
           ref = {gridRef}
            rowData={rowData}
            columnDefs={columnDefs}
             rowSelection = "single">
        </AgGridReact>
    </div>
   );
};
export default App;
