package com.company.thread;

import java.util.concurrent.Callable;

public class MyThread3 implements Callable<String> {
    /**
     * 多线程的第三种实现方式:
     * 特点:可以获取到多线程运行的结果
     *      1.创建一个类MyCallable实现Callable接口
     *      2.重写ca11 (是有返回值的，表示多线程运行的结果)
     *      3.创建MyCallable的对象(表示多线程要执行的任务)
     *      4.创建FutureTask的对象 (作用管理多线程运行的结果)
     *      5.创建Thread类的对象，并启动(表示线程)
     * @return
     * @throws Exception
     */
    @Override
    public String call() throws Exception {
        return "asdad";
    }
}
