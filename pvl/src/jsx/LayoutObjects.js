
export const LayoutObjects = [
      {
        uid: '11',
        name: '2 Columns',
        type: 'columns',
        classes: 'row',
        html: '<div>*</div>',
        preview: '<div style="display:flex"><div style="flex:1"></div><div style="flex:1"></div></div>',
        droppable: false,
        columns: [
          {
            width: '2',
            html: '<div>*</div>',
            classes: 'column',
            droppable: true
          },
          {
            width: '2',
            html: '<div>*</div>',
            classes: 'column',
            droppable: true
          },
        ]

      },
      {
        uid: '14',
        name: '2 Columns',
        type: 'columns',
        classes: 'row',
        html: '<div>*</div>',
        preview: '<div style="display:flex"><div style="flex:2"></div><div style="flex:3"></div></div>',
        droppable: false,
        columns: [
          {
            width: '2',
            html: '<div>*</div>',
            classes: 'column',
            droppable: true
          },
          {
            width: '3',
            html: '<div>*</div>',
            classes: 'column',
            droppable: true
          },
        ]

      },
      {
        uid: '12',
        name: '3 Columns',
        type: 'columns',
        classes: 'row',
        html: '<div style="">*</div>',
        preview: '<div style="display:flex"><div style="flex:1"></div><div style="flex:2"></div><div style="flex:2"></div></div>',
        droppable: false,
        children: [
          {
            width: '1',
            html: '<div style="">*</div>',
            classes: 'column',
            droppable: true
          },
          {
            width: '2',
            html: '<div>*</div>',
            classes: 'column',
            droppable: true
          },
          {
            width: '2',
            html: '<div>*</div>',
            classes: 'column',
            droppable: true
          }
        ]

      },
       {
        uid: '99',
        name: 'Break Line',
        type: 'design',
        html: '<br>',
        preview: '&lt;br&gt;',
        classes: '',
        droppable: false
      },
      { 
        uid: '13',
        name: 'Horizontal Rule',
        type: 'design',
        html: '<hr>',
        preview: '<hr>',
        classes: '',
        droppable: false
      }
    ]