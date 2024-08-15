import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ApprovedItems = () => {
  const [approvedItems, setApprovedItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApprovedItems = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3033/api/clothing/approved-donations"
        );
        setApprovedItems(response.data);
      } catch (error) {
        console.error("Error fetching approved items:", error);
        toast.error("Error fetching approved items.");
      }
    };
    fetchApprovedItems();
  }, []);

  const handleRequest = async (itemId) => {
    const staticRequesterId = "66bcbe624007a6467bb4302b";
    try {
      const response = await axios.post("http://localhost:3033/api/requests", {
        itemId,
        requesterId: staticRequesterId,
      });
      console.log("Requisição criada com sucesso!", response.data);
      toast.success("Requisição criada com sucesso!");
    } catch (error) {
      console.error("Erro ao criar requisição.", error);
      toast.error("Erro ao criar requisição.");
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 mt-14 text-center text-gray-800">
        Approved Clothing Items
      </h2>
      <div className="flex flex-wrap justify-center">
        {approvedItems.map((item) => (
          <div key={item._id} className="card bg-base-100 w-96 shadow-xl m-4">
            <figure>
              <img
                src={item.imageUrl}
                alt={item.itemName}
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.itemName}</h2>
              <p>{item.description}</p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleRequest(item._id)}
                  className="btn btn-primary"
                >
                  Request
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};
