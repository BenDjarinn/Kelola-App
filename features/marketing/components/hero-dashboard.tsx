interface StatusBadgeProps {
  label: string;
  variant: "declined" | "approved";
}

function StatusBadge({ label, variant }: StatusBadgeProps) {
  const variantStyles =
    variant === "declined"
      ? "bg-[#9B1C5D] text-white"
      : "bg-[#3D8C40] text-white";

  return (
    <span className={`inline-block rounded-full px-[10px] py-[2px] text-[11px] font-medium ${variantStyles}`}>
      {label}
    </span>
  );
}

export function HeroDashboard() {

  return (
    <div className="w-full rounded-[16px] border border-white/10 bg-[#1e2540] p-[24px] shadow-2xl">
      {/* Title */}
      <h3 className="mb-[16px] text-[16px] font-bold text-white font-[family-name:var(--font-nav)]">
        Notes - Sprint 4 Q1 - Polaris Briefing
      </h3>

      {/* Table 1: Transaction Status */}
      <div className="rounded-[12px] border border-white/10 bg-[#2a3354] p-[16px]">
        <table className="w-full text-left">
          <thead>
            <tr className="text-[12px] font-medium text-white/60">
              <th className="pb-[12px] font-medium">ID</th>
              <th className="pb-[12px] font-medium">Keterangan</th>
              <th className="pb-[12px] font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="text-[12px] text-white/80">
            <tr>
              <td className="py-[8px]">TX-1020</td>
              <td className="py-[8px]">Gagal tx</td>
              <td className="py-[8px]"><StatusBadge label="Declined" variant="declined" /></td>
            </tr>
            <tr>
              <td className="py-[8px]">TX-1022</td>
              <td className="py-[8px]">Aman</td>
              <td className="py-[8px]"><StatusBadge label="Approved" variant="approved" /></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Table 2: Financial Summary */}
      <div className="mt-[16px] rounded-[12px] border border-white/10 bg-[#2a3354] p-[16px]">
        <table className="w-full text-left">
          <thead>
            <tr className="text-[12px] font-medium text-white/60">
              <th className="pb-[12px] font-medium">PIC</th>
              <th className="pb-[12px] font-medium">China Points</th>
              <th className="pb-[12px] font-medium">Debit</th>
              <th className="pb-[12px] font-medium">Credit</th>
            </tr>
          </thead>
          <tbody className="text-[12px] text-white/80">
            <tr>
              <td className="py-[8px]">Nesyah</td>
              <td className="py-[8px]">+ 10,000</td>
              <td className="py-[8px]">Rp. 2,500,000</td>
              <td className="py-[8px]">-</td>
            </tr>
            <tr>
              <td className="py-[8px]">Albert</td>
              <td className="py-[8px]">+ 20,000</td>
              <td className="py-[8px]">-</td>
              <td className="py-[8px]">Rp. 100,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
