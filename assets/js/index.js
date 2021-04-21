import {getImageMatrix} from './imageMatrix.js';

window.addEventListener('DOMContentLoaded', () => {
    const imageMatrixRows = getImageMatrix();
    const imageCol=document.querySelector('#imageCol');
    imageMatrixRows.forEach(item=>{
        let htmlString=`<div class="row imgRow" style="height:${item.rowHeight};width:auto">
                            <div class="col-12 imgCol d-flex">
                                ${getCellHtml(item.cells)}
                            </div>
                        </div>`
        imageCol.insertAdjacentHTML('beforeend', htmlString);
    });
});

const getCellHtml=(cells)=>{
    let returnString="";
    cells.forEach(cell=>{
        returnString+=`<div class="cell d-flex" style="background-color:hsv(${cell.cellColor.h},${cell.cellColor.s},${cell.cellColor.v}); width:${cell.cellWidth}; height:100%">
        </div>`;
    });
    return(returnString);
};

