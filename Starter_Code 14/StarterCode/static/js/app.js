const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
// d3.json function
const data = d3.json(url)
console.log(data)
d3.json(url).then(function (data) {
    console.log(data)
//   Create an array of each country's numbers
    // let sample_values = Object.values(data.sample_values);
    // let otu_ids = Object.values(data.otu_ids);
    // let otu_labels = Object.values(data.otu_labels);
    //   Create an array of each country's numbers
    let samples = Object.values(data.samples);
    // print out
    console.log(samples)
    // Create an array of category labels
    let labels = Object.keys(data.samples);
    // Display the default plot
   
let target_sample = samples[0] 
let sample_values = result.sample_values;
let otu_ids = result.otu_ids;
// let otu_ids = target_sample.otu_ids;
let otu_labels = result.otu_labels;
// let otu_labels = target_sample.otu_labels;

    let chart_data = [{
        x : sample_values.slice(0,10),
        y : otu_ids,
        text: otu_labels.slice(0,10),
        type: "bar",
        orientation: 'h',
        marker: {

        },
    }];
    let layout = {
        title: 'Belly Button top 10',
        xaxis: {title: 'Sample Values'},
        yaxis: {title: 'Otu Ids'},
        };
    Plotly.newPlot( "bar", chart_data, layout);
})


let bubble_data = [{
    x : otu_ids,
    y : sample_values,
    text: otu_labels,
    type: "bubble",
    marker: { 
        color: otu_ids,
        size: sample_values,
    }
}];
let bubble_layout = {
    width: 1000,
    height: 400,
    xaxis: {title: 'Bacteria Sample '},
    yaxis: {title: 'Otu Ids'},
    };
    Plotly.newPlot( "bubble", bubble_data, bubble_layout);


// .catch(console.log)()
// Looping through the cities array, create one marker for each city, bind a popup containing its name and population, and add it to the map.
// var dataT = []

// for (var i = 0; i < data.length; i++) {
//     var dataT = data[i];}




