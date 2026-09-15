interface StatusBadgeProps {
  label: string;
  variant: "declined" | "approved";
}

function StatusBadge({ label, variant }: StatusBadgeProps) {
  const variantStyles =
    variant === "declined"
      ? "bg-status-declined text-white"
      : "bg-status-approved text-white";

  return (
    <span className={`inline-block rounded-full px-[10px] py-0.5 text-[11px] font-medium ${variantStyles}`}>
      {label}
    </span>
  );
}

export function HeroDashboard() {

  return (
    <div className="w-full rounded-[16px] border border-white/10 bg-mkt-card-bg p-6 shadow-2xl">
      {/* Title */}
      <h3 className="mb-4 text-[16px] font-bold text-white font-nav">
        Notes - Sprint 4 Q1 - Polaris Briefing
      </h3>

      {/* Table 1: Transaction Status */}
      <div className="rounded-[12px] border border-white/10 bg-mkt-card-inner-bg p-4">
        <table className="w-full text-left">
          <thead>
            <tr className="text-[12px] font-medium text-white/60">
              <th className="pb-3 font-medium">ID</th>
              <th className="pb-3 font-medium">Keterangan</th>
              <th className="pb-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="text-[12px] text-white/80">
            <tr>
              <td className="py-2">TX-1020</td>
              <td className="py-2">Gagal tx</td>
              <td className="py-2"><StatusBadge label="Declined" variant="declined" /></td>
            </tr>
            <tr>
              <td className="py-2">TX-1022</td>
              <td className="py-2">Aman</td>
              <td className="py-2"><StatusBadge label="Approved" variant="approved" /></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Table 2: Financial Summary */}
      <div className="mt-4 rounded-[12px] border border-white/10 bg-mkt-card-inner-bg p-4">
        <table className="w-full text-left">
          <thead>
            <tr className="text-[12px] font-medium text-white/60">
              <th className="pb-3 font-medium">PIC</th>
              <th className="pb-3 font-medium">China Points</th>
              <th className="pb-3 font-medium">Debit</th>
              <th className="pb-3 font-medium">Credit</th>
            </tr>
          </thead>
          <tbody className="text-[12px] text-white/80">
            <tr>
              <td className="py-2">Nesyah</td>
              <td className="py-2">+ 10,000</td>
              <td className="py-2">Rp. 2,500,000</td>
              <td className="py-2">-</td>
            </tr>
            <tr>
              <td className="py-2">Albert</td>
              <td className="py-2">+ 20,000</td>
              <td className="py-2">-</td>
              <td className="py-2">Rp. 100,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
