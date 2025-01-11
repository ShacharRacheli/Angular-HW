import { Component } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
// import {Component} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// export class TreeCoursesComponent {
  

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface Course {
  name: string;
  Semester?:number;
  children?:  Course[];
}

const TREE_DATA: Course[] = [
  {
    name: 'Angular',
    Semester:3,
    children:[
{name:"HTML"},{name:"CSS"},{name:"Java Script"},{name:"Type script"}
]
},
{
  name: 'C#',
  Semester:3,
  children: [
    {name:"OOP",
      Semester:1,
      children:[
        {name:"inheritance"},{name:"interfaces"}
      ]
    },{name:"Arrays"},{name:"Recursion"},{name:"Structors"}
  ],
},
{name: 'SQL',
  Semester:1,
  children:[
    {name:"procedures"},{name:"functions"},
  ]}
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  Semester:number
}

@Component({
  selector: 'app-tree-courses',
  standalone: true,
  imports: [MatTreeModule, MatButtonModule, MatIconModule,CommonModule],
  templateUrl: './tree-courses.component.html',
  styleUrl: './tree-courses.component.css'
})
export class TreeCoursesComponent {



  private _transformer = (node: Course, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      Semester:node.Semester||0,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
    
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}


