/* 
    Project: Demo for Education Horizons Group
    Sprint: 1
    Task: 1
    Author: Vineet W. Singh 
    Start Date: 21/4/21
    Date of last edit: 22/4/2021
    Date of last review:
*/
import {getImageMatrix} from './imageMatrix.js';

window.addEventListener('DOMContentLoaded', () => {
    //get select control
    const selectControl = document.querySelector("#sortedSelector");
    let sorted = true;
    //add event listener for change
    selectControl.addEventListener('change', eve=>{
        if (selectControl.value==="false") sorted = false;
        else sorted = true;
        setCanvas(sorted);
    });
    //set the canvas
    setCanvas(sorted);
});

const setCanvas=(sorted)=>{
    //set cell heights and width
    const cellHeight=2, cellWidth=4;
    //get image colors
    const imageMatrixRows = getImageMatrix(sorted);
    //get canvas ref
    const imageCanvas=document.querySelector('#imgCanvas');
    //set canvas width & height
    imageCanvas.width=cellWidth*128;
    imageCanvas.height=cellHeight*256;
    imageCanvas.style.width=`${cellWidth*128}px`;
    imageCanvas.style.height=`${cellHeight*256}px`;
    imageCanvas.style.padding=`10px`;
    imageCanvas.style.margin=`10px`;
    imageCanvas.style.border=`solid 2px black`;
    //set canvas context
    const canvasCont=imageCanvas.getContext("2d");
    canvasCont.clearRect(0,0,imageCanvas.width,imageCanvas.height);
    //reset y co-ordinate
    let cellY=0,rowCtr=0;
    imageMatrixRows.forEach(cells=>{
        //for a new row reset the X value to 0, cell counter to 0
        let cellX=0, cellCtr=0;
        //calculate y co-ordinate
        cellY=cellHeight*rowCtr;
        //process for all cells in the row
        cells.forEach(cell=>{
            //calculate x co-ordinate value
            cellX=cellWidth*cellCtr;
            //set canvas contents
            canvasCont.fillStyle=cell;
            canvasCont.fillRect(cellX,cellY,cellWidth,cellHeight);
            canvasCont.save();
            //add one to cellCtr
            cellCtr++;
        });
        canvasCont.save();
        rowCtr++;
    });
}