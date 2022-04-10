/*
 * @Author: huangl
 * @Date: 2022-04-07 14:17:28
 * @LastEditors: YQL
 * @LastEditTime: 2022-04-07 14:58:10
 * @Description: file content
 */
import React from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "antd";
import { connect } from "react-redux";
import { increase, decrease, frechList } from "@/store/actions/count"

function Home(props) {
  const [searchParams] = useSearchParams();
  let id = searchParams.getAll("id")[0];
  const { count , count1,list,increase,decrease,frechList} = props
  return (
    <div>
      <h2>Home-{id}</h2>
      <h2>store - count 例子</h2>
      <div>count:{count}</div>
      <Button type="primary" onClick={increase}>increase</Button> 
      <hr />
      <div>count1:{count1}</div>
      <Button type="primary" onClick={decrease}>decrease</Button>
      <hr />
      <div>list:</div>
      {
        list.map((item,index)=>{
          console.log(item)
          return(
            <div key={index}><span>name:{item.name}</span><span>age:{item.age}</span> </div>
          )
        })
      }
      <Button type="primary" onClick={frechList}>fretchList</Button>
    </div>
  );
}

// 状态映射：将reducer中的state映射成props.让开发者可以在组件中使用props.num去调用state中的num
const mapStateToProps = (state) => {
  return {
    count:state.count.count,
    count1:state.count.count1,
    list:state.count.list,
  }; 
};

// 映射事件到props
const mapDispatchToProps = {increase, decrease,frechList}

// connect(state映射，dispatch映射)(当前组件名)
export default connect(mapStateToProps, mapDispatchToProps)(Home);