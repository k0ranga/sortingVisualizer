
//first itreation of my project althout it did work but i had to face problems with some sorting method

// import React from 'react';
// import {getMergeSortAnimations} from '../SortingAlgorithms/sortingAlgorithms';
// import { getBubbleSortAnimations } from '../SortingAlgorithms/bubbleSort';
// import { getInsertionSortAnimations } from '../SortingAlgorithms/insertionSort';
// import { getHeapSortAnimations } from '../SortingAlgorithms/heapSort';
// import { getQuickSortAnimations } from '../SortingAlgorithms/quickSort';
// import './SortingVisualizer.css';

// // Change this value for the speed of the animations.
// const ANIMATION_SPEED_MS = 1;

// // Change this value for the number of bars (value) in the array.


// // This is the main color of the array bars.
// const PRIMARY_COLOR = 'turquoise';

// // This is the color of array bars that are being compared throughout the animations.
// const SECONDARY_COLOR = 'red';

// export default class SortingVisualizer extends React.Component {
//   // constructor(props) {
//   //   super(props);

//   //   this.state = {
//   //     array: [],
//   //   };
//   // }

//   // componentDidMount() {
//   //   this.resetArray();
//   // }
//   constructor(props) {
//     super(props);

//     this.state = {
//       array: [],
//       animationSpeed: 1,
//       numberOfArrayBars: 100,
//       primaryColor: 'turquoise',
//       secondaryColor: 'red',
//     };
//   }

//   // Add methods for handling input changes
//   handleSpeedChange = (event) => {
//     this.setState({ animationSpeed: parseInt(event.target.value) });
//   };

//   handleBarsChange = (event) => {
//     this.setState({ numberOfArrayBars: parseInt(event.target.value) });
//   };

//   handlePrimaryColorChange = (event) => {
//     this.setState({ primaryColor: event.target.value });
//   };

//   handleSecondaryColorChange = (event) => {
//     this.setState({ secondaryColor: event.target.value });
//   };

//   // resetArray() {
//   //   const array = [];
//   //   for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
//   //     array.push(randomIntFromInterval(5, 730));
//   //   }
//   //   this.setState({array});
//   // }
//   resetArray() {
//     const { numberOfArrayBars } = this.state;
//     const array = [];
//     for (let i = 0; i < numberOfArrayBars; i++) {
//       array.push(randomIntFromInterval(5, 500));
//     }
//     this.setState({ array });
//   }

//   mergeSort() {
//     const animations = getMergeSortAnimations(this.state.array);
//     for (let i = 0; i < animations.length; i++) {
//       const arrayBars = document.getElementsByClassName('array-bar');
//       const isColorChange = i % 3 !== 2;
//       if (isColorChange) {
//         const [barOneIdx, barTwoIdx] = animations[i];
//         const barOneStyle = arrayBars[barOneIdx].style;
//         const barTwoStyle = arrayBars[barTwoIdx].style;
//         const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
//         setTimeout(() => {
//           barOneStyle.backgroundColor = color;
//           barTwoStyle.backgroundColor = color;
//         }, i * ANIMATION_SPEED_MS);
//       } else {
//         setTimeout(() => {
//           const [barOneIdx, newHeight] = animations[i];
//           const barOneStyle = arrayBars[barOneIdx].style;
//           barOneStyle.height = `${newHeight}px`;

//         }, i * ANIMATION_SPEED_MS);
//       }
//     }
//   }


// //   quickSort() {
// //     const animations = getQuickSortAnimations(this.state.array);
// //     const arrayBars = document.getElementsByClassName('array-bar');
// //     console.log("Animations:", animations);

// //     for (let i = 0; i < animations.length; i++) {
// //         const isColorChange = i % 4 < 2;
// //         if (isColorChange) {
// //             const [barOneIdx, barTwoIdx] = animations[i];
// //             console.log(`Color Change: ${barOneIdx}, ${barTwoIdx}`);
// //             if (arrayBars[barOneIdx] && arrayBars[barTwoIdx]) {
// //                 const barOneStyle = arrayBars[barOneIdx].style;
// //                 const barTwoStyle = arrayBars[barTwoIdx].style;
// //                 const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
// //                 setTimeout(() => {
// //                     barOneStyle.backgroundColor = color;
// //                     barTwoStyle.backgroundColor = color;
// //                 }, i * ANIMATION_SPEED_MS);
// //             }
// //         } else {
// //             setTimeout(() => {
// //                 const [barIdx, newHeight] = animations[i];
// //                 console.log(`Height Change: ${barIdx}, ${newHeight}`);
// //                 if (arrayBars[barIdx]) {
// //                     const barStyle = arrayBars[barIdx].style;
// //                     barStyle.height = `${newHeight}px`;
// //                 }
// //             }, i * ANIMATION_SPEED_MS);
// //         }
// //     }
// // }
// quickSort() {
//   const animations = getQuickSortAnimations(this.state.array);
//   const arrayBars = document.getElementsByClassName('array-bar');
//   console.log("Animations:", animations);

//   for (let i = 0; i < animations.length; i++) {
//       const isColorChange = i % 4 < 2;
//       if (isColorChange) {
//           const [barOneIdx, barTwoIdx] = animations[i];
//           console.log(`Color Change: ${barOneIdx}, ${barTwoIdx}`);
//           if (arrayBars[barOneIdx] && arrayBars[barTwoIdx]) {
//               const barOneStyle = arrayBars[barOneIdx].style;
//               const barTwoStyle = arrayBars[barTwoIdx].style;
//               const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
//               setTimeout(() => {
//                   barOneStyle.backgroundColor = color;
//                   barTwoStyle.backgroundColor = color;
//               }, i * ANIMATION_SPEED_MS);
//           }
//       } else {
//           setTimeout(() => {
//               const [barIdx, newHeight] = animations[i];
//               console.log(`Height Change: ${barIdx}, ${newHeight}`);
//               if (arrayBars[barIdx]) {
//                   const barStyle = arrayBars[barIdx].style;
//                   barStyle.height = `${newHeight}px`;
//               }
//           }, i * ANIMATION_SPEED_MS);
//       }
//   }
// }





//   bubbleSort() {
//     const animations = getBubbleSortAnimations(this.state.array);
//     for (let i = 0; i < animations.length; i++) {
//         const arrayBars = document.getElementsByClassName('array-bar');
//         const isColorChange = i % 4 < 2;
//         if (isColorChange) {
//             const [barOneIdx, barTwoIdx] = animations[i];
//             const barOneStyle = arrayBars[barOneIdx].style;
//             const barTwoStyle = arrayBars[barTwoIdx].style;
//             const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
//             setTimeout(() => {
//                 barOneStyle.backgroundColor = color;
//                 barTwoStyle.backgroundColor = color;
//             }, i * ANIMATION_SPEED_MS);
//         } else {
//             setTimeout(() => {
//                 const [barIdx, newHeight] = animations[i];
//                 const barStyle = arrayBars[barIdx].style;
//                 barStyle.height = `${newHeight}px`;
//                 if (i % 4 === 3) {
//                   barStyle.backgroundColor = 'pink';
//               }
//             }, i * ANIMATION_SPEED_MS);
//         }
//     }
    
// }
// heapSort() {
//   const animations = getHeapSortAnimations(this.state.array);
//   const arrayBars = document.getElementsByClassName('array-bar');
//   console.log("Heap Sort Animations:", animations);

//   for (let i = 0; i < animations.length; i++) {
//       const isColorChange = i % 4 < 2;
//       if (isColorChange) {
//           const [barOneIdx, barTwoIdx] = animations[i];
//           console.log(`Color Change: ${barOneIdx}, ${barTwoIdx}`);
//           if (arrayBars[barOneIdx] && arrayBars[barTwoIdx]) {
//               const barOneStyle = arrayBars[barOneIdx].style;
//               const barTwoStyle = arrayBars[barTwoIdx].style;
//               const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
//               setTimeout(() => {
//                   barOneStyle.backgroundColor = color;
//                   barTwoStyle.backgroundColor = color;
//               }, i * ANIMATION_SPEED_MS);
//           } else {
//               console.warn(`Invalid indices for color change: ${barOneIdx}, ${barTwoIdx}`);
//           }
//       } else {
//           setTimeout(() => {
//               const [barIdx, newHeight] = animations[i];
//               console.log(`Height Change: ${barIdx}, ${newHeight}`);
//               if (arrayBars[barIdx]) {
//                   const barStyle = arrayBars[barIdx].style;
//                   barStyle.height = `${newHeight}px`;
//               } else {
//                   console.warn(`Invalid index for height change: ${barIdx}`);
//               }
//           }, i * ANIMATION_SPEED_MS);
//       }
//   }
// }





// insertionSort() {
//   const animations = getInsertionSortAnimations(this.state.array);
//   for (let i = 0; i < animations.length; i++) {
//       const arrayBars = document.getElementsByClassName('array-bar');
//       const isColorChange = i % 4 < 2;
//       if (isColorChange) {
//           const [barOneIdx, barTwoIdx] = animations[i];
//           const barOneStyle = arrayBars[barOneIdx].style;
//           const barTwoStyle = arrayBars[barTwoIdx].style;
//           const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
//           setTimeout(() => {
//               barOneStyle.backgroundColor = color;
//               barTwoStyle.backgroundColor = color;
//           }, i * ANIMATION_SPEED_MS);
//       } else {
//           setTimeout(() => {
//               const [barIdx, newHeight] = animations[i];
//               const barStyle = arrayBars[barIdx].style;
//               barStyle.height = `${newHeight}px`;
              
//           }, i * ANIMATION_SPEED_MS);
//       }
//   }
// }


//   // NOTE: This method will only work if your sorting algorithms actually return
//   // the sorted arrays; if they return the animations (as they currently do), then
//   // this method will be broken.
//   // testSortingAlgorithms() {
//   //   for (let i = 0; i < 100; i++) {
//   //     const array = [];
//   //     const length = randomIntFromInterval(1, 1000);
//   //     for (let i = 0; i < length; i++) {
//   //       array.push(randomIntFromInterval(-1000, 1000));
//   //     }
//   //     const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
//   //     const mergeSortedArray = getMergeSortAnimations(array.slice());
//   //     console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
//   //   }
//   // }

//   // render() {
//   //   const {array} = this.state;

//   //   return (
//   //     <div className="array-container">
//   //       <nav className="navbar">
//   //         <button className="nav-button" onClick={() => this.resetArray()}>Generate New Array</button>
//   //         <button className="nav-button" onClick={() => this.mergeSort()}>Merge Sort</button>
//   //         <button className="nav-button" onClick={() => this.bubbleSort()}>Bubble Sort</button>
//   //         <button className="nav-button" onClick={() => this.insertionSort()}>Insertion Sort</button>
//   //         <button className="nav-button" onClick={() => this.quickSort()}>Quick Sort</button>
//   //         <button className="nav-button" onClick={() => this.heapSort()}>Heap Sort</button>
//   //       </nav>
//   //       <div className="bars-container">
//   //         {array.map((value, idx) => (
//   //           <div
//   //             className="array-bar"
//   //             key={idx}
//   //             style={{
//   //               backgroundColor: PRIMARY_COLOR,
//   //               height: `${value}px`,
//   //             }}></div>
//   //         ))}
//   //       </div>
//   //     </div>
//   //   );
//   // }
//   handleSortButtonClick = () => {
//     switch (this.state.selectedAlgorithm) {
//       case 'mergeSort':
//         this.mergeSort();
//         break;
//       case 'bubbleSort':
//         this.bubbleSort();
//         break;
//       case 'insertionSort':
//         this.insertionSort();
//         break;
//       case 'quickSort':
//         this.quickSort();
//         break;
//       case 'heapSort':
//         this.heapSort();
//         break;
//       default:
//         console.warn(`Unknown algorithm: ${this.state.selectedAlgorithm}`);
//     }
//   };
//   render() {
//     const { array, animationSpeed, numberOfArrayBars, primaryColor, secondaryColor } = this.state;
  
//     return (
//       <div className="array-container">
//         <nav className="navbar">
//           <button className="nav-button" onClick={() => this.resetArray()}>Generate New Array</button>
//           <button className="nav-button" onClick={() => this.mergeSort()}>Merge Sort</button>
//           <button className="nav-button" onClick={() => this.bubbleSort()}>Bubble Sort</button>
//           <button className="nav-button" onClick={() => this.insertionSort()}>Insertion Sort</button>
//           <button className="nav-button" onClick={() => this.quickSort()}>Quick Sort</button>
//           <button className="nav-button" onClick={() => this.heapSort()}>Heap Sort</button>
//           <div className="input-container">
//             <label htmlFor="speedInput">Animation Speed (ms): </label>
//             <input
//               id="speedInput"
//               type="number"
//               value={animationSpeed}
//               onChange={this.handleSpeedChange}
//               min="1"
//               max="100"
//             />
//             <label htmlFor="barsInput">Number of Bars: </label>
//             <input
//               id="barsInput"
//               type="number"
//               value={numberOfArrayBars}
//               onChange={this.handleBarsChange}
//               min="10"
//               max="200"
//             />
//             <label htmlFor="primaryColorInput">Primary Color: </label>
//             <input
//               id="primaryColorInput"
//               type="text"
//               value={primaryColor}
//               onChange={this.handlePrimaryColorChange}
//             />
//             <label htmlFor="secondaryColorInput">Secondary Color: </label>
//             <input
//               id="secondaryColorInput"
//               type="text"
//               value={secondaryColor}
//               onChange={this.handleSecondaryColorChange}
//             />
//           </div>
//         </nav>
//         <div className="bars-container">
//           {array.map((value, idx) => (
//             <div
//               className="array-bar"
//               key={idx}
//               style={{
//                 backgroundColor: primaryColor,
//                 height: `${value}px`,
//               }}
//             ></div>
//           ))}
//         </div>
//       </div>
//     );
//   }
  
// }

// // From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
// function randomIntFromInterval(min, max) {
//   // min and max included
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// // function arraysAreEqual(arrayOne, arrayTwo) {
// //   if (arrayOne.length !== arrayTwo.length) return false;
// //   for (let i = 0; i < arrayOne.length; i++) {
// //     if (arrayOne[i] !== arrayTwo[i]) {
// //       return false;
// //     }
// //   }
// //   return true;
// // }

//instead of using index i was also using string such as 'revert' ,'compare' and 'swap' to make code more robust  

import React from 'react';
import { getMergeSortAnimations } from '../SortingAlgorithms/sortingAlgorithms';
import { getBubbleSortAnimations } from '../SortingAlgorithms/bubbleSort';
import { getInsertionSortAnimations } from '../SortingAlgorithms/insertionSort';
import { getHeapSortAnimations } from '../SortingAlgorithms/heapSort';
import { getQuickSortAnimations } from '../SortingAlgorithms/quickSort';
import { getSelectionSortAnimations } from '../SortingAlgorithms/selectionSort';
import './SortingVisualizer.css';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      animationSpeed: 24,
      numberOfArrayBars: 70,
      primaryColor: 'turquoise',
      secondaryColor: 'red',
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  handleSpeedChange = (event) => {
    this.setState({ animationSpeed: parseInt(event.target.value) });
  };

  handleBarsChange = (event) => {
    this.setState({ numberOfArrayBars: parseInt(event.target.value) });
  };

  handlePrimaryColorChange = (event) => {
    this.setState({ primaryColor: event.target.value });
  };

  handleSecondaryColorChange = (event) => {
    this.setState({ secondaryColor: event.target.value });
  };

  resetArray = () => {
    const { numberOfArrayBars } = this.state;
    const array = [];
    for (let i = 0; i < numberOfArrayBars; i++) {
      array.push(randomIntFromInterval(5, 500));
    }
    this.setState({ array });
  };
  
mergeSort = () => {
    const { animationSpeed, primaryColor, secondaryColor, sort } = this.state;
    const animations = getMergeSortAnimations(this.state.array);
    const arrayBars = document.getElementsByClassName('array-bar');
    
    for (let i = 0; i < animations.length; i++) {
        const [action, barOneIdx, barTwoIdx] = animations[i];
        
        if (action === 'compare' || action === 'revert') {
            const color = action === 'compare' ? secondaryColor : primaryColor;
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            }, i * animationSpeed);
        
        } else if (action === 'merge') {
            setTimeout(() => {
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${barTwoIdx}px`; // barTwoIdx holds the new height
            }, i * animationSpeed);
        
        } else if (action === 'final') {
            setTimeout(() => {
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.backgroundColor = sort; // Color the final position bar to purple
            }, i * animationSpeed);
        }
    }
}

  

  quickSort = () => {
    const { animationSpeed, primaryColor, secondaryColor } = this.state;
    const animations = getQuickSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const [action, barOneIdx, barTwoIdx] = animations[i];
        if (action === 'compare' || action === 'revert') {
            const color = action === 'compare' ? secondaryColor : primaryColor;
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            }, i * animationSpeed);
        } else if (action === 'swap') {
            setTimeout(() => {
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const tempHeight = barOneStyle.height;
                barOneStyle.height = barTwoStyle.height;
                barTwoStyle.height = tempHeight;
            }, i * animationSpeed);
        }
    }
}
  
  
selectionSort = () => {
  const { animationSpeed, primaryColor, secondaryColor } = this.state;
  const animations = getSelectionSortAnimations(this.state.array);
  for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const [action, barOneIdx, barTwoIdx] = animations[i];
      if(action === 'high' || action === 'low'){
        const color = action === 'high' ? secondaryColor : primaryColor;
        const barStyle= arrayBars[barOneIdx].style;
        setTimeout(()=>{
          barStyle.backgroundColor=color;
        }, i* animationSpeed);
      }
      if (action === 'compare' || action === 'revert') {
          const color = action === 'compare' ? secondaryColor : primaryColor;
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
          }, i * animationSpeed);
      } else if (action === 'swap') {
          setTimeout(() => {
              const barOneStyle = arrayBars[barOneIdx].style;
              const barTwoStyle = arrayBars[barTwoIdx].style;
              const tempHeight = barOneStyle.height;
              barOneStyle.height = barTwoStyle.height;
              barTwoStyle.height = tempHeight;
          }, i * animationSpeed);
      }
     
  }
}


  

  bubbleSort = () => {
    const { animationSpeed, primaryColor, secondaryColor } = this.state;
    const animations = getBubbleSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 4 < 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 4 === 0 ? secondaryColor : primaryColor;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * animationSpeed);
      } else {
        setTimeout(() => {
          const [barIdx, newHeight] = animations[i];
          const barStyle = arrayBars[barIdx].style;
          barStyle.height = `${newHeight}px`;
        }, i * animationSpeed);
      }
    }
  };

  heapSort = () => {
    const { animationSpeed, primaryColor, secondaryColor } = this.state;
    const animations = getHeapSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const [action, barOneIdx, barTwoIdx] = animations[i];
        if (action === 'compare' || action === 'revert') {
            const color = action === 'compare' ? secondaryColor : primaryColor;
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            }, i * animationSpeed);
        } else if (action === 'swap') {
            setTimeout(() => {
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const tempHeight = barOneStyle.height;
                barOneStyle.height = barTwoStyle.height;
                barTwoStyle.height = tempHeight;
            }, i * animationSpeed);
        }
    }
}

  insertionSort = () => {
    const { animationSpeed, primaryColor, secondaryColor } = this.state;
    const animations = getInsertionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 4 < 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 4 === 0 ? secondaryColor : primaryColor;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * animationSpeed);
      } else {
        setTimeout(() => {
          const [barIdx, newHeight] = animations[i];
          const barStyle = arrayBars[barIdx].style;
          barStyle.height = `${newHeight}px`;
        }, i * animationSpeed);
      }
    }
  };

  render() {
    const { array, animationSpeed, numberOfArrayBars, primaryColor, secondaryColor } = this.state;

    return (
      <div className="array-container">
        <nav className="navbar">
          <button className="nav-button" onClick={this.resetArray}>Generate New Array</button>
          <button className="nav-button" onClick={this.mergeSort}>Merge Sort</button>
          <button className="nav-button" onClick={this.bubbleSort}>Bubble Sort</button>
          <button className="nav-button" onClick={this.insertionSort}>Insertion Sort</button>
          <button className="nav-button" onClick={this.quickSort}>Quick Sort</button>
          <button className="nav-button" onClick={this.heapSort}>Heap Sort </button>
          <button className="nav-button" onClick={this.selectionSort}>Selection Sort</button> 
          <div className="input-container">
            <label htmlFor="speedInput">Animation Speed (ms): </label>
            <input
              id="speedInput"
              type="number"
              value={animationSpeed}
              onChange={this.handleSpeedChange}
              min="1"
              max="100"
            />
            <label htmlFor="barsInput">Number of Bars: </label>
            <input
              id="barsInput"
              type="number"
              value={numberOfArrayBars}
              onChange={this.handleBarsChange}
              min="10"
              max="200"
            />
            <label htmlFor="primaryColorInput">Primary Color: </label>
            <input
              id="primaryColorInput"
              type="text"
              value={primaryColor}
              onChange={this.handlePrimaryColorChange}
            />
            <label htmlFor="secondaryColorInput">Secondary Color: </label>
            <input
              id="secondaryColorInput"
              type="text"
              value={secondaryColor}
              onChange={this.handleSecondaryColorChange}
            />
          </div>
        </nav>
        <div className="bars-container">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{
                backgroundColor: primaryColor,
                height: `${value}px`,
              }}
            ></div>
          ))}
        </div>
      </div>
    );
  }
}

// Helper function
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


//here i was trying to implment the timer and show the result like tume taken, time complexity and space complexitu.
// import React from 'react';
// import { getMergeSortAnimations } from '../SortingAlgorithms/sortingAlgorithms';
// import './SortingVisualizer.css'; // Your existing CSS file
// import './SortingVisualizerStyles.css'; // New CSS file for timer and sort results

// export default class SortingVisualizer extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       array: [],
//       animationSpeed: 24,
//       numberOfArrayBars: 70,
//       primaryColor: 'turquoise',
//       secondaryColor: 'red',
//       sortResults: [], // Updated to store sort results
//     };
//   }

//   componentDidMount() {
//     this.resetArray();
//   }

//   handleSpeedChange = (event) => {
//     this.setState({ animationSpeed: parseInt(event.target.value) });
//   };

//   handleBarsChange = (event) => {
//     this.setState({ numberOfArrayBars: parseInt(event.target.value) });
//   };

//   handlePrimaryColorChange = (event) => {
//     this.setState({ primaryColor: event.target.value });
//   };

//   handleSecondaryColorChange = (event) => {
//     this.setState({ secondaryColor: event.target.value });
//   };

//   resetArray = () => {
//     const { numberOfArrayBars } = this.state;
//     const array = [];
//     for (let i = 0; i < numberOfArrayBars; i++) {
//       array.push(randomIntFromInterval(5, 500));
//     }
//     this.setState({ array, sortResults: [] }); // Clear sort results on reset
//   };

//   mergeSort = () => {
//     const { animationSpeed, primaryColor, secondaryColor } = this.state;
//     const animations = getMergeSortAnimations(this.state.array);
//     let timerStart = performance.now(); // Start timer

//     for (let i = 0; i < animations.length; i++) {
//       const arrayBars = document.getElementsByClassName('array-bar');
//       const [action, barOneIdx, barTwoIdx] = animations[i];
//       if (action === 'compare' || action === 'revert') {
//         const color = action === 'compare' ? secondaryColor : primaryColor;
//         const barOneStyle = arrayBars[barOneIdx].style;
//         const barTwoStyle = arrayBars[barTwoIdx].style;
//         setTimeout(() => {
//           barOneStyle.backgroundColor = color;
//           barTwoStyle.backgroundColor = color;
//         }, i * animationSpeed);
//       } else if (action === 'merge') {
//         setTimeout(() => {
//           const barOneStyle = arrayBars[barOneIdx].style;
//           barOneStyle.height = `${barTwoIdx}px`; // barTwoIdx holds the new height
//         }, i * animationSpeed);
//       }
//     }

//     // Record sort result after sorting is complete
//     setTimeout(() => {
//       let timerEnd = performance.now(); // End timer
//       let timeTaken = timerEnd - timerStart;
//       let timeComplexity = 'O(n log n)';
//       let spaceComplexity = 'O(n)';

//       this.setState((prevState) => ({
//         sortResults: [
//           ...prevState.sortResults,
//           {
//             sortName: 'Merge Sort',
//             timeTaken: timeTaken.toFixed(2),
//             timeComplexity: timeComplexity,
//             spaceComplexity: spaceComplexity,
//           },
//         ],
//       }));
//     }, animations.length * animationSpeed);
//   };

//   // Implement other sorting algorithms similarly

//   render() {
//     const { array, animationSpeed, numberOfArrayBars, primaryColor, secondaryColor, sortResults } = this.state;

//     return (
//       <div className="array-container">
//         <nav className="navbar">
//           <button className="nav-button" onClick={this.resetArray}>Generate New Array</button>
//           <button className="nav-button" onClick={this.mergeSort}>Merge Sort</button>
//           {/* Add other sorting algorithm buttons similarly */}
//           <div className="input-container">
//             <label htmlFor="speedInput">Animation Speed (ms): </label>
//             <input
//               id="speedInput"
//               type="number"
//               value={animationSpeed}
//               onChange={this.handleSpeedChange}
//               min="1"
//               max="100"
//             />
//             <label htmlFor="barsInput">Number of Bars: </label>
//             <input
//               id="barsInput"
//               type="number"
//               value={numberOfArrayBars}
//               onChange={this.handleBarsChange}
//               min="10"
//               max="200"
//             />
//             <label htmlFor="primaryColorInput">Primary Color: </label>
//             <input
//               id="primaryColorInput"
//               type="text"
//               value={primaryColor}
//               onChange={this.handlePrimaryColorChange}
//             />
//             <label htmlFor="secondaryColorInput">Secondary Color: </label>
//             <input
//               id="secondaryColorInput"
//               type="text"
//               value={secondaryColor}
//               onChange={this.handleSecondaryColorChange}
//             />
//           </div>
//         </nav>
//         <div className="bars-container">
//           {array.map((value, idx) => (
//             <div
//               className="array-bar"
//               key={idx}
//               style={{
//                 backgroundColor: primaryColor,
//                 height: `${value}px`,
//               }}
//             ></div>
//           ))}
//         </div>
//         <div className="results-container">
//           <h2>Sort Results</h2>
//           {sortResults.map((result, index) => (
//             <div key={index} className="result-item">
//               <p><strong>Sort Algorithm:</strong> {result.sortName}</p>
//               <p><strong>Time Taken:</strong> {result.timeTaken} ms</p>
//               <p><strong>Space Complexity:</strong> {result.spaceComplexity}</p>
//               <p><strong>Time Complexity:</strong> {result.timeComplexity}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// // Helper function
// function randomIntFromInterval(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }