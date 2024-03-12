#include <node.h>
#include <windows.h>
#include <Lmcons.h>

namespace demo {

using v8::Exception;
using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Number;
using v8::Object;
using v8::String;
using v8::Value;


void Add(const FunctionCallbackInfo<Value>& args) {

  Isolate* isolate = args.GetIsolate();
