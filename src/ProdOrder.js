import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./ProdOrder.module.css";

const ProdOrder = () => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    axios
      .get("https://e-commerce-application-fdjs.onrender.com/sample/orderGet")
      .then((response) => setOrder(response.data))
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, []);

  const Accept = (id) => {
    axios
      .put(`https://e-commerce-application-fdjs.onrender.com/sample/orderUpdateView/${id}/`)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error accepting order:", error);
      });
  };

  const Reject = (id) => {
    axios
      .put(`https://e-commerce-application-fdjs.onrender.com/sample/orderReject/${id}/`)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error rejecting order:", error);
      });
  };

  return (
    <div className={styles.pageContainer}>

      {/* Page Header */}
      <div className={styles.pageHeader}>

        <div>
          <p className={styles.eyebrow}>ORDER MANAGEMENT</p>

          <h1>Customer Orders</h1>

          <p className={styles.subtitle}>
            Review incoming orders and manage their status.
          </p>
        </div>

        <div className={styles.orderCount}>
          <span>Total Orders</span>
          <strong>{order.length}</strong>
        </div>

      </div>


      {/* Orders Table */}
      {order.length > 0 ? (

        <div className={styles.tableWrapper}>

          <table className={styles.ordersTable}>

            <thead>
              <tr>
                <th>Order ID</th>
                <th>Quantity</th>
                <th>Order Date</th>
                <th>Status</th>
                <th>Product ID</th>
                <th>Accept</th>
                <th>Reject</th>
              </tr>
            </thead>

            <tbody>

              {order.map((item) => (

                <tr key={item.orderid}>

                  <td className={styles.orderId}>
                    #{item.orderid}
                  </td>

                  <td>
                    {item.quantity}
                  </td>

                  <td className={styles.orderDate}>
                    {item.order_date}
                  </td>

                  <td>

                    <span
                      className={`${styles.status} ${
                        item.status?.toLowerCase() === "accepted"
                          ? styles.accepted
                          : item.status?.toLowerCase() === "rejected"
                          ? styles.rejected
                          : styles.pending
                      }`}
                    >
                      {item.status}
                    </span>

                  </td>

                  <td>
                    {item.product_id}
                  </td>

                  <td>

                    <button
                      className={styles.acceptButton}
                      onClick={() => Accept(item.orderid)}
                    >
                      Accept
                    </button>

                  </td>

                  <td>

                    <button
                      className={styles.rejectButton}
                      onClick={() => Reject(item.orderid)}
                    >
                      Reject
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      ) : (

        <div className={styles.emptyState}>

          <div className={styles.emptyIcon}>⌁</div>

          <h2>No Orders Yet</h2>

          <p>
            There are currently no customer orders to display.
          </p>

        </div>

      )}

    </div>
  );
};

export default ProdOrder;