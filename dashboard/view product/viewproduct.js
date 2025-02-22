"use client"
import { Table, Button, Modal, Form, Input, Select } from "antd"
import { useEffect, useState } from "react"
import axios from "axios"
import toast from "react-hot-toast"
import Spinner from "../../utility/spinner"

const { Option } = Select

const ManageProducts = ({ productData }) => {
  const [products, setProducts] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)
  const [form] = Form.useForm()

  useEffect(() => {
    setProducts(productData)
  }, [productData])

  if (!products) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-222px)] w-full">
        <Spinner />
      </div>
    )
  }

  const handleEdit = (product) => {
    setEditingProduct(product)
    form.setFieldsValue(product)
    setIsModalOpen(true)
  }

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/products/product/${productId}`)
      toast.success("Product deleted successfully")
      setProducts(products.filter((product) => product._id !== productId))
    } catch (error) {
      toast.error("Failed to delete product")
    }
  }

  const handleUpdate = async (values) => {
    console.log(values)
    try {
      const response = await axios.patch(
        `https://swift-shop-backend.vercel.app/api/v1/products/product/${editingProduct._id}`,
        values
      )
      if (response.data.success) {
        toast.success("Product updated successfully")
        setProducts(
          products.map((product) =>
            product._id === editingProduct._id ? { ...product, ...values } : product
          )
        )
        setIsModalOpen(false)
      }
    } catch (error) {
      toast.error("Failed to update product")
    }
  }

  const columns = [
    {
      title: "Image",
      dataIndex: "imageLink",
      key: "imageLink",
      render: (img) => <img src={img} alt="Product" width={50} height={50} />,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (category) => category?.name || "N/A",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "In Stock",
      dataIndex: "inStock",
      key: "inStock",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
          <Button onClick={() => handleEdit(record)}>Edit</Button>
          <Button danger onClick={() => handleDelete(record._id)}>Delete</Button>
        </>
      ),
    },
  ]

  return (
    <div style={{ padding: 20 }}>
      <h2>Manage Products</h2>
      <Table columns={columns} dataSource={products} pagination={{ pageSize: 5 }} />
      <Modal
        title="Edit Product"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={() => form.submit()}
      >
        <Form form={form} layout="vertical" onFinish={handleUpdate}>
          <Form.Item name="name" label="Product Name" rules={[{ required: true }]}> 
            <Input />
          </Form.Item>
          {/* <Form.Item name="category" label="Category" rules={[{ required: true }]}> 
            <Select placeholder="Select category">
            {
              products?.map((product)=>(
                <Option key={product._id} value={product.category.id}>{product.category.name}</Option>

              ))
            }
              
            </Select>
          </Form.Item> */}
          <Form.Item name="price" label="Price" rules={[{ required: true }]}> 
            <Input type="number" />
          </Form.Item>
          <Form.Item name="inStock" label="inStok" rules={[{ required: true }]}> 
            <Input type="number" />
          </Form.Item>
          <Form.Item name="description" label="Description" rules={[{ required: true }]}> 
          <Input.TextArea rows={2} />
          </Form.Item>
          <Form.Item name="imageLink" label="Image URL" rules={[{ required: true }]}> 
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default ManageProducts
