import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';



/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'PRODUCTOS',
    children: [
      {name: 'Artículos'},
      {name: 'Atributos'},
      {name: 'Categorias'},
    ]
  }, 
  /*{
    name: 'CONFIGURACIÓN',
    children: [
      {
        name: 'Green',
        children: [
          {name: 'Broccoli'},
          {name: 'Brussels sprouts'},
        ]
      }, {
        name: 'Orange',
        children: [
          {name: 'Pumpkins'},
          {name: 'Carrots'}
        ]
      },
    ]
  },*/

];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}


@Component({
  selector: 'app-sidenavbanana',
  templateUrl: './sidenavbanana.component.html',
  styleUrls: ['./sidenavbanana.component.css']
})
export class SidenavbananaComponent {
  /*Funciones para Boton Checkbox*/
  checked = false;
  mode = "side";
  validar(){
    if (this.checked == false) {
      this.mode = "over";
    } else {
      this.mode = "side";
    }
  }
  /*-------------------------------------------*/
  fillerNav = [
      { id: '17', type: 'title', title: 'TITULO', url: '#', icon: 'business' },
      { id: '17', type: 'line', title: 'linea separadora', url: '#', icon: 'business' },
      { id: '23', type: 'item', title: 'productos', url: '#', icon: 'star' },
      { id: '22', type: 'item', title: 'lista_precios', url: '#', icon: 'list_alt' },
      { id: '14', type: 'item', title: 'categorias', url: '#', icon: 'category' },
      // { id: '26', type: 'item', title: 'atributos', url: '#', icon: 'send' },
      { id: '26', type: 'item', title: 'atributos', url: '&36', icon: 'send' },
      {
        id: '78', type: 'item', title: 'formas_pago', url: '&48', icon: 'payments',
        set_values: { 'activar_condicion_especial': true, 'numero_sumatoria': 100, 'propiedad_sumatoria': 'porcentaje' }
      },
      {
        id: null, type: 'tree', title: 'documentos de compra', url: '#', icon: 'description', childs: [
          {
            id: '54', type: 'item', title: 'presupuestos', url: '#', icon: 'description', set_values: {
              type_document: 10
            }
          },
          {
            id: '60', type: 'item', title: 'orden_compras', url: '#', icon: 'description', set_values: {
              type_document: 7
            }
          },
          {
            id: '65', type: 'item', title: 'recepciones_compra', url: '#', icon: 'description', set_values: {
              type_document: 8
            }
          },
          {
            id: '80', type: 'item', title: 'facturas', url: '#', icon: 'description', set_values: {
              type_document: 9
            }
          },
        ]
      },
      { id: '53', type: 'item', title: 'configuracion', url: '#', icon: 'settings', },
      { id: 'back', type: 'item', title: 'atras', url: '', icon: 'exit_to_app' }
  ]

  /*--Contrustor para Tree*/
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }
  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  

}
