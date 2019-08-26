import React from 'react';
import { Table, Input, InputNumber, Form, Popconfirm } from 'antd';
import classname from 'classname';
import '../index.css';

const data = [];
for (let i = 0; i < 3; i++) {
  data.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    price:2035,
    gendesr:10,
    oil:'92#',
  });
}
const EditableContext = React.createContext();

class EditableCell extends React.Component {
  getInput = () => {
    if (this.props.inputType === 'number') {
      return <InputNumber />;
    }
    return <Input />;
  };

  renderCell = ({ getFieldDecorator }) => {
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item style={{ margin: 0 }}>
            {getFieldDecorator(dataIndex, {
              rules: [
                {
                  required: true,
                  message: `Please Input ${title}!`,
                },
              ],
              initialValue: record[dataIndex],
            })(this.getInput())}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };

  render() {
    return <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>;
  }
}
const list = [
    {id:'1',},
    {id:'02'},
    {id:'03'},
    {id:'04'},
    {id:'05'},
    {id:'06'},
    {id:'07'},
    {id:'08'},
    {id:'09'},
    {id:'10'},
    {id:'11'},
    {id:'12',},
    {id:'13'},
    {id:'14'},
    {id:'15'},
    {id:'16'},
    {id:'17'},
    {id:'18'},
    {id:'19'},
    {id:'20'},
    {id:'21'},
    {id:'22',},
    {id:'23'},
    {id:'24'},
    {id:'25'},
    {id:'26'},
    {id:'27'},
    {id:'28'},
    {id:'29'},
    {id:'30'},
    {id:'31'}, 
    {id:'32',},
    {id:'33'},
    {id:'34'},
    {id:'35'},
    {id:'36'},

]
class Left extends React.Component {
    constructor(props){
        super(props);
        this.columns = [
            {
                title: '时间',
                dataIndex: 'name',
                editable: true,
            },
            {
                title: '油枪',
                dataIndex: 'age',
                editable: true,
                render:(text,record)=>(
                    <div className="txt">{record.age}</div>
                )
            },
            {
                title: '油品',
                dataIndex: 'oil',
                editable: true,
            },
            {
                title: '升数',
                dataIndex: 'gendesr',
                editable: true,
            },
            {
                title: '金额',
                dataIndex: 'price',
                editable: true,
            },
            {
                title: '操作',
                dataIndex: 'operation',
                width:'23%',
                render: (text, record) =>{
                const { editingKey } = this.state;
                const editable = this.isEditing(record);
                return editable ? (
                  <span>
                    <EditableContext.Consumer>
                      {form => (
                        <a
                          onClick={() => this.save(form, record.key)}
                          style={{ marginRight: 8 }}
                        >
                          Save
                        </a>
                      )}
                    </EditableContext.Consumer>
                    <Popconfirm title="Sure to cancel?" onConfirm={() => this.cancel(record.key)}>
                        <a>Cancel</a>
                    </Popconfirm>
                  </span>
                ) : (
                    <div className="iconBtnGroup">
                        <a disabled={editingKey !== ''} onClick={() => this.edit(record.key)} href="javascript:;" title='编辑' className="iconBtn editBlackIcon"></a>
                    </div>
                );
            },}
        ];
    }
    state = {
        data,
        editingKey: ''
    };

    edit(key) {
        this.setState({ editingKey: key });
    }

    isEditing = record => record.key === this.state.editingKey;

    cancel = () => {
      this.setState({ editingKey: '' });
    };

    save(form, key) {
        form.validateFields((error, row) => {
          if (error) {
            return;
          }
          const newData = [...this.state.data];
          const index = newData.findIndex(item => key === item.key);
          if (index > -1) {
            const item = newData[index];
            newData.splice(index, 1, {
              ...item,
              ...row,
            });
            this.setState({ data: newData, editingKey: '' });
          } else {
            newData.push(row);
            this.setState({ data: newData, editingKey: '' });
          }
        });
      }
  
    render() {
        
        const btnList =list.map((item) =>
        <div className={classname({'gunNum': true, 'detail': item.id==='20', 'detailReful': item.id==='21'})} key={item.id}>
                    <span className="num">{item.id}</span>
                    <span className="oilNum">-10#</span>
                    <span className="price">300.00</span>
            </div>
        )

        const components = {
            body: {
              cell: EditableCell,
            },
          };
      
          const columns = this.columns.map(col => {
            if (!col.editable) {
              return col;
            }
            return {
              ...col,
              onCell: record => ({
                record,
                inputType: col.dataIndex,
                dataIndex: col.dataIndex,
                title: col.title,
                editing: this.isEditing(record),
              }),
            };
          });

        return (
           <div className="leftCon">
                <div className="listGood">
                    <EditableContext.Provider value={this.props.form}>
                        <Table
                        components={components}
                        dataSource={this.state.data}
                        columns={columns}
                        rowClassName="editable-row"
                        />
                    </EditableContext.Provider>
                </div>
                <div className="oilGun">
                    {btnList}
                </div>
           </div>
        );
	}
		
	

}
export default Form.create()(Left);