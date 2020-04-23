# Project Title

Average price calulator API - Getting Stream from Client

## Getting Started

Average price calulator API - Getting Stream from Client

### Prerequisites

Install node.js

### Code Generation
Run the following command:

```javascript
protoc -I=. ./protos/calculator.proto \
  --js_out=import_style=commonjs,binary:./server \
  --grpc_out=./server \
  --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin`
```


## Authors

* **John Kottis** - - [johnkottis](https://github.com/johnkottis)



