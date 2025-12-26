"use client";
import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement } from "@stripe/react-stripe-js";

// Load Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY!);

export default function InvoicePaymentWrapper() {
  return (
    <Elements stripe={stripePromise}>
      <InvoicePayment />
    </Elements>
  );
}

function InvoicePayment() {
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceTotal, setInvoiceTotal] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"stripe" | "bank" | null>(null);
  const [bankReference, setBankReference] = useState("");

  const [cardSlide, setCardSlide] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    middleInitial: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    zip: "",
  });

  const states = [
    "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA",
    "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
    "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT",
    "VA","WA","WV","WI","WY"
  ];

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Initially slide the card from lower position
  useEffect(() => {
    setCardSlide(true);
  }, []);

  // Invoice Lookup
  const lookupInvoice = () => {
    if (!invoiceNumber.trim()) {
      setMessage("Please enter an invoice number.");
      return;
    }
    setLoading(true);
    setMessage("");
    setInvoiceTotal(null);
    setPaymentMethod(null);

    setTimeout(() => {
      if (invoiceNumber === "12345") {
        setInvoiceTotal(49.99);
        setMessage("");
      } else {
        setMessage("Invoice not found.");
      }
      setLoading(false);
    }, 500);
  };

  const submitBankPayment = () => {
    setSubmitted(true);
    if (
      !form.firstName ||
      !form.lastName ||
      !validateEmail(form.email) ||
      !form.phone ||
      !form.city ||
      !form.state ||
      !form.zip ||
      invoiceTotal === null ||
      !bankReference
    ) {
      setMessage("Please complete all required fields and enter Bank Reference ID.");
      return;
    }

    setLoading(true);
    setMessage("");
    setTimeout(() => {
      setSuccess(true);
      setSubmitted(false);
      setLoading(false);
      resetForm();
    }, 1000);
  };

  const submitStripePayment = () => {
    setSubmitted(true);
    if (
      !form.firstName ||
      !form.lastName ||
      !validateEmail(form.email) ||
      !form.phone ||
      !form.city ||
      !form.state ||
      !form.zip ||
      invoiceTotal === null
    ) {
      setMessage("Please complete all required fields.");
      return;
    }

    setLoading(true);
    setMessage("");
    setTimeout(() => {
      setSuccess(true);
      setSubmitted(false);
      setLoading(false);
      resetForm();
    }, 1000);
  };

  const resetForm = () => {
    setForm({
      firstName: "",
      middleInitial: "",
      lastName: "",
      company: "",
      email: "",
      phone: "",
      city: "",
      state: "",
      zip: "",
    });
    setInvoiceNumber("");
    setInvoiceTotal(null);
    setPaymentMethod(null);
    setBankReference("");
  };

  return (
    <div className="flex justify-center min-h-screen md:min-h-[100px] bg-gradient-to-br  px-4">
      <div className="w-full max-w-md flex flex-col items-center">

        {/* Invoice Lookup Card */}
        <div className={`bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-6 border text-black border-gray-200 w-full
          transform transition-all duration-700 ease-in-out
          ${cardSlide ? "-translate-y-0 opacity-100" : "translate-y-40 opacity-0"} ${!invoiceTotal ? "mt-16 md:mt-100" : "mt-40"}`
        }>
          <h1 className="text-3xl font-bold text-center mb-6 text-black">
            Pay Your Invoice
          </h1>

          <FloatingInput
            placeholder="Invoice Number"
            value={invoiceNumber}
            onChange={setInvoiceNumber}
          />

          <button
            onClick={lookupInvoice}
            disabled={loading}
            className={`w-full mt-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-black hover:bg-gray-900 text-white shadow-lg hover:scale-105"
            }`}
          >
            {loading ? "Checking..." : "Check Total"}
          </button>

          {message && (
            <p className="text-center text-red-600 mt-4 text-sm font-medium">{message}</p>
          )}
        </div>

        {/* Payment Card */}
        {invoiceTotal !== null && (
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-6 mt-8 space-y-5 border border-gray-200 w-full transform transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-2xl">

            <p className="text-xl font-bold text-black mb-3">Total Amount: ${invoiceTotal}</p>

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <button
                onClick={() => setPaymentMethod("bank")}
                className={`flex-1 py-2 font-semibold rounded-xl transition-all duration-300 ${
                  paymentMethod === "bank"
                    ? "bg-black text-white shadow-lg scale-105 hover:bg-gray-900"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-400"
                }`}
              >
                Bank Transfer
              </button>
              <button
                onClick={() => setPaymentMethod("stripe")}
                className={`flex-1 py-2 font-semibold rounded-xl transition-all duration-300 ${
                  paymentMethod === "stripe"
                    ? "bg-indigo-600 text-white shadow-lg scale-105 hover:bg-indigo-800"
                    : "bg-gray-200 text-gray-800 hover:bg-indigo-400"
                }`}
              >
                Stripe
              </button>
            </div>

            {paymentMethod && (
              <div className="space-y-3 animate-fadeIn text-black">
                <div className="grid grid-cols-3 gap-2">
                  <FloatingInput placeholder="First Name *" value={form.firstName} onChange={(val) => setForm({...form, firstName: val})} required />
                  <FloatingInput placeholder="M.I." value={form.middleInitial} onChange={(val) => setForm({...form, middleInitial: val})} maxLength={1} />
                  <FloatingInput placeholder="Last Name *" value={form.lastName} onChange={(val) => setForm({...form, lastName: val})} required />
                </div>

                <FloatingInput placeholder="Company Name" value={form.company} onChange={(val) => setForm({...form, company: val})} />
                <FloatingInput placeholder="Email *" value={form.email} onChange={(val) => setForm({...form, email: val})} type="email" required />
                <FloatingInput placeholder="Phone *" value={form.phone} onChange={(val) => setForm({...form, phone: val})} required />
                <FloatingInput placeholder="City *" value={form.city} onChange={(val) => setForm({...form, city: val})} required />

                <div className="grid grid-cols-2 gap-2">
                  <select className="w-full h-12 px-4 rounded-xl border border-gray-300 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400 text-black" value={form.state} onChange={(e) => setForm({...form, state: e.target.value})}>
                    <option value="">State *</option>
                    {states.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <FloatingInput placeholder="ZIP *" value={form.zip} onChange={(val) => setForm({...form, zip: val})} required />
                </div>

                {paymentMethod === "bank" && (
                  <FloatingInput placeholder="Bank Transfer Reference ID *" value={bankReference} onChange={setBankReference} required />
                )}

                {paymentMethod === "stripe" && (
                  <div className="p-4 border rounded-xl shadow-inner hover:shadow-lg transition-all">
                    <CardElement options={{ style: { base: { fontSize: '16px', color: '#111' } } }} />
                  </div>
                )}

                <button
                  onClick={paymentMethod === "bank" ? submitBankPayment : submitStripePayment}
                  disabled={loading}
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : paymentMethod === "bank"
                        ? "bg-black hover:bg-gray-900 text-white shadow-lg hover:scale-105"
                        : "bg-indigo-600 hover:bg-indigo-800 text-white shadow-lg hover:scale-105"
                  }`}
                >
                  {loading ? "Processing..." : paymentMethod === "bank" ? "Submit Bank Payment" : "Pay with Stripe"}
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {success && (
        <div className="fixed top-6 right-6 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg animate-slideDown z-50">
          Payment submitted successfully
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-5px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.5s ease-in-out; }

        @keyframes slideDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-slideDown { animation: slideDown 0.5s ease-in-out; }

        .floating-label-container { position: relative; }
        .floating-label-container input {
          padding-top: 1.25rem;
          padding-bottom: 0.5rem;
          color: #111; /* Black text */
        }
        .floating-label-container label {
          position: absolute;
          left: 1rem;
          top: 0.5rem;
          font-size: 0.875rem;
          color: #9ca3af;
          pointer-events: none;
          transition: all 0.2s ease-in-out;
        }
        .floating-label-container input:focus + label,
        .floating-label-container input:not(:placeholder-shown) + label {
          top: -0.5rem;
          left: 0.75rem;
          font-size: 0.75rem;
          color: #4f46e5;
        }
      `}</style>
    </div>
  );
}

interface FloatingInputProps {
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
  type?: string;
  maxLength?: number;
  required?: boolean;
}

function FloatingInput({ placeholder, value, onChange, type="text", maxLength, required }: FloatingInputProps) {
  return (
    <div className="floating-label-container w-full">
      <input
        type={type}
        value={value}
        maxLength={maxLength}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        placeholder=" "
        className="w-full px-4 pt-5 pb-2 rounded-xl border border-gray-300 bg-white text-black focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400 transition-all"
      />
      <label>{placeholder}</label>
    </div>
  );
}
