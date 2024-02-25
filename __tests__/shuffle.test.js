const botsData = require("../src/botsData");
const result = require("../src/shuffle");
const copyArray = require("../src/shuffle");

describe("shuffle should...", () => {
  test("all items are in array", ()=>{
    expect(botsData[0]['name']).toContain('The Hammer');
    expect(botsData[1]['name']).toContain('Crowbar');
    expect(botsData[2]['name']).toContain('Rusty');
    expect(botsData[3]['name']).toContain('Beta');
    expect(botsData[4]['name']).toContain('Prime Information Drone');
    expect(botsData[5]['name']).toContain('Brobot');
    expect(botsData[6]['name']).toContain('Nozzle');
    expect(botsData[7]['name']).toContain('Globotron');
    expect(botsData[8]['name']).toContain('Self-Aware Garbage Android');
    expect(botsData[9]['name']).toContain('Mechi');
  })
  test("return same length as argument", ()=>{
    expect(result).toBe(copyArray)
  })
})
